import {
    getAllEmployees,
    getAllPriorities,
    getAllStatuses,
} from '@/api/getRequest'
import { createNewTask } from '@/api/postRequest'
import {
    employeeSchema,
    prioritySchema,
    statusSchema,
} from '@/api/schemas/apiSchemas'
import {
    zodTaskPostFormSchema,
    zodTaskPostFormSchemaType,
} from '@/api/zodSchemas/zod.taskPostSchema'
import DropDownWithTitle from '@/components/DropDown/DropDownWithTitle'
import InputField from '@/components/Input'
import useDepartmentsContext from '@/contexts/AllPages/useDepartmentContext'
import HeaderWrapper from '@/layouts/HeaderWrapper'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useBeforeUnload, useLocation, useNavigate } from 'react-router'
import CustomDatePickerWrapper from './wrappers/CustomDatePickerWrapper'
import DropDownWrapper from './wrappers/DropDownWrapper'
import FilterEmployeesWrapper from './wrappers/FilterEmployeesWrapper'
import { SubmitButtonWrapper } from './wrappers/SubmitButtonWrapper'

export type CreateTaskSchema = zodTaskPostFormSchemaType & {
    department_id: number
}

const CreateTaskPage = () => {
    const location = useLocation()
    const navigation = useNavigate()

    // State for storing saved data
    const [savedData, setSavedData] = useState<CreateTaskSchema | undefined>()

    // Fetch saved form data
    useEffect(() => {
        const fetchSavedData = async () => {
            try {
                const savedData = localStorage.createTaskFields
                const savedLocationKey = localStorage.locationKey
                const savedLoc = savedLocationKey
                    ? JSON.parse(savedLocationKey)
                    : null

                if (savedLoc === location.key && savedData) {
                    setSavedData(JSON.parse(savedData))
                } else {
                    localStorage.removeItem('createTaskFields')
                }
            } catch (error) {
                console.error('Error loading saved data:', error)
            }
        }

        fetchSavedData()
    }, [location.key])

    // useForm setup
    const methods = useForm<CreateTaskSchema>({
        defaultValues: {
            name: savedData?.name || '',
            description: savedData?.description || '',
            status_id: savedData?.status_id || 1,
            priority_id: savedData?.priority_id || 2,
            department_id: savedData?.department_id || undefined,
            employee_id: savedData?.employee_id || undefined,
            due_date: new Date(new Date().setDate(new Date().getDate() + 1)),
        } as CreateTaskSchema,
        mode: 'onChange',
        resolver: zodResolver(zodTaskPostFormSchema),
        delayError: 500,
    })

    const { control, handleSubmit, reset, getValues, resetField } = methods

    // Reset form when savedData is available
    useEffect(() => {
        if (savedData) {
            reset(savedData)
        }
    }, [savedData, reset])

    // Fetch additional data for form fields
    const departments = useDepartmentsContext()
    const [statuses, setStatuses] = useState<statusSchema[]>([])
    const [employees, setEmployees] = useState<employeeSchema[]>([])
    const [priorities, setPriorities] = useState<prioritySchema[]>([])

    useEffect(() => {
        const fetchData = async () => {
            setStatuses(await getAllStatuses())
            setEmployees(await getAllEmployees())
            setPriorities(await getAllPriorities())
        }
        fetchData()
    }, [])

    // Handle form submission
    const onSubmit: SubmitHandler<CreateTaskSchema> = async (data) => {
        const response = await createNewTask(data)
        console.log(response)
        navigation('/')
    }

    // Save form data before unload
    useBeforeUnload(() => {
        const data = getValues()
        localStorage.createTaskFields = JSON.stringify({
            ...data,
            due_date: null,
        })
        localStorage.locationKey = JSON.stringify(location.key)
    })

    // Show loading until all required data is ready
    if (
        !(
            statuses.length &&
            priorities.length &&
            employees.length &&
            departments.length
        )
    ) {
        return <div></div>
    }

    return (
        <HeaderWrapper text="შექმენი ახალი დავალება">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="isolate mt-[30px] grid grid-cols-[auto_auto] gap-x-[150px] gap-y-[55px] rounded-sm px-[55px] pt-[65px] pb-[62px]"
            >
                <InputField
                    possibleErrors={[
                        { type: 'too_small', message: 'მინიმუმ 3 სიმბოლო' },
                        { type: 'too_big', message: 'მაქსიმუმ 255 სიმბოლო' },
                    ]}
                    control={control}
                    name="name"
                    title="სათაური"
                    required
                    type="text"
                />
                <DropDownWithTitle
                    title="დეპარტამენტი"
                    required
                    dropDownProps={{
                        items: departments,
                        control: control,
                        name: 'department_id',
                    }}
                />
                <InputField
                    possibleErrors={[
                        { type: 'too_small', message: 'მინიმუმ 4 სიტყვა' },
                        { type: 'too_big', message: 'მაქსიმუმ 255 სიმბოლო' },
                    ]}
                    control={control}
                    name="description"
                    title="აღწერა"
                    type="textarea"
                />

                <FilterEmployeesWrapper
                    resetField={resetField}
                    employees={employees}
                    control={control}
                />

                {/* this might seem unnecessary but somehow this prevents
                rerendering of two dropDown inputs on change of every other
                input... IDK why */}
                {statuses.length > 0 && priorities.length > 0 ? (
                    <DropDownWrapper
                        control={control}
                        data={{ priorities: priorities, statuses: statuses }}
                    />
                ) : (
                    ''
                )}
                <CustomDatePickerWrapper name={'due_date'} control={control} />
                <SubmitButtonWrapper onSubmit={() => onSubmit} />
            </form>
            <DevTool control={control} />
        </HeaderWrapper>
    )
}

export default CreateTaskPage

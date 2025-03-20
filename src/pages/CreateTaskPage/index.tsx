import { CustomDatePickerWrapper } from './CustomDatePickerWrapper'
import { SubmitButtonWrapper } from './SubmitButtonWrapper'
import InputField from '@/components/Input'
import { useForm, SubmitHandler } from 'react-hook-form'
import HeaderWrapper from '@/layouts/HeaderWrapper'
import DropDownWrapper from './DropDownWrapper'
import useDepartmentsContext from '@/contexts/AllPages/useDepartmentContext'
import { useEffect, useState } from 'react'
import {
    employeeSchema,
    prioritySchema,
    statusSchema,
} from '@/api/schemas/apiSchemas'
import {
    getAllEmployees,
    getAllPriorities,
    getAllStatuses,
} from '@/api/getRequest'
import { DevTool } from '@hookform/devtools'
import { createNewTask } from '@/api/postRequest'
import DropDownWithTitle from '@/components/DropDown/DropDownWithTitle'
import FilterEmployeesWrapper from './FilterEmployeesWrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    zodTaskPostFormSchema,
    zodTaskPostFormSchemaType,
} from '@/api/zodSchemas/zod.taskPostSchema'
import { useNavigate } from 'react-router'

export type CreateTaskSchema = zodTaskPostFormSchemaType & {
    department_id: number
}

const CreateTaskPage = () => {
    const methods = useForm<CreateTaskSchema>({
        mode: 'onChange',
        resolver: zodResolver(zodTaskPostFormSchema),
        delayError: 500,
    })

    const { control, handleSubmit, resetField } = methods

    const navigation = useNavigate()

    //States and Context
    const departments = useDepartmentsContext()
    const [statuses, setStatuses] = useState<statusSchema[]>([])
    const [employees, setEmployees] = useState<employeeSchema[]>([])
    const [priorities, setPriorities] = useState<prioritySchema[]>([])

    // useEffect
    useEffect(() => {
        const fetchData = async () => {
            setStatuses(await getAllStatuses())
            setEmployees(await getAllEmployees())
            setPriorities(await getAllPriorities())
        }
        fetchData()
    }, [])

    const onSubmit: SubmitHandler<CreateTaskSchema> = async (data) => {
        const response = await createNewTask(data)
        console.log(response)
        navigation('/')
    }

    if (
        !(
            statuses.length > 0 &&
            priorities.length > 0 &&
            employees.length > 0 &&
            departments.length > 0
        )
    )
        return <></>

    return (
        <HeaderWrapper text="შექმენი ახალი დავალება">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="isolate mt-[30px] grid grid-cols-[550px_550px] justify-around gap-y-[55px] rounded-sm px-[55px] pt-[65px] pb-[62px]"
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
            {/* <DevTool control={control} /> */}
        </HeaderWrapper>
    )
}

export default CreateTaskPage

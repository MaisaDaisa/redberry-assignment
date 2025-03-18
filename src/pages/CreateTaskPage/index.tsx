import { CustomDatePickerWrapper } from './CustomDatePickerWrapper'
import { SubmitButtonWrapper } from './SubmitButtonWrapper'
import InputField from '@/components/Input'
import { useForm, SubmitHandler } from 'react-hook-form'
import HeaderWrapper from '@/layouts/HeaderWrapper'
// import { DevTool } from '@hookform/devtools'
import DropDown from '@/components/DropDown/DropDown'
import DropDownWrapper from './DropDownWrapper'
import { useDepartmentsContext } from '@/contexts/mainContext'
import { useEffect, useState } from 'react'
import { employeeSchema, prioritySchema, statusSchema } from '@/api/apiSchemas'
import {
    getAllEmployees,
    getAllPriorities,
    getAllStatuses,
} from '@/api/getRequest'
import AvatarWithTextInline from '@/components/AvatarWithTextInline'
import DropDownChoiceWrapper from '@/components/DropDown/DropDownChoiceWrapper'

export type FormFields = {
    title: string
    description: string
}

const CreateTaskPage = () => {
    const methods = useForm<FormFields>({
        mode: 'onChange',
        delayError: 500,
    })

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

    const { control, handleSubmit } = methods

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data)
    }

    const test = [
        { id: 1, name: 'gela' },
        { id: 2, name: 'dad' },
        { id: 3, name: 'dada' },
    ]

    return (
        <HeaderWrapper text="შექმენი ახალი დავალება">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="isolate mt-[30px] grid grid-cols-[550px_550px] justify-around gap-y-[55px] rounded-sm px-[55px] pt-[65px] pb-[62px]"
            >
                <InputField
                    control={control}
                    name="title"
                    title="სათაური"
                    required
                    type="text"
                />
                <DropDown
                    control={control}
                    name="department"
                    title="დეპარტამენტი"
                    required
                    items={departments}
                />
                <InputField
                    control={control}
                    name="description"
                    title="აღწერა"
                    type="textarea"
                />
                <DropDown
                    control={control}
                    name="employee"
                    title="პასუხისმგებელი თანამშრომელი"
                    key={'employeeDropdown'}
                    required
                    items={employees}
                    renderItem={(item, onClick) => (
                        <DropDownChoiceWrapper onClick={onClick}>
                            <AvatarWithTextInline
                                avatarUrl={item.avatar}
                                name={item.name}
                                key={'avatar' + item.id}
                            />
                        </DropDownChoiceWrapper>
                    )}
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
                <CustomDatePickerWrapper control={control} />
                <SubmitButtonWrapper onSubmit={() => onSubmit} />
            </form>
        </HeaderWrapper>
    )
}

export default CreateTaskPage

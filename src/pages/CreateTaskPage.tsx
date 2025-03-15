import InputField from '@/components/Inputs/InputField'
import { useForm, SubmitHandler } from 'react-hook-form'
import HeaderWrapper from '@/layouts/HeaderWrapper'
import { DevTool } from '@hookform/devtools'
import DropDown from '@/components/DropDown/DropDown'
import CustomDatePicker from '@/components/DatePicker/CustomDatePicker'
import DropDownWrapper from '@/components/DropDown/DropDownWrapper'

type FormFields = {
    title: string
    description: string
}

const CreateTaskPage = () => {
    const methods = useForm<FormFields>({
        mode: 'onChange',
        delayError: 500,
    })

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
                    items={test}
                />
                <InputField
                    control={control}
                    name="description"
                    title="აღწერა"
                    required
                    type="textarea"
                />
                <DropDown
                    control={control}
                    name="employee"
                    title="პასუხისმგებელი თანამშრომელი"
                    key={'employeeDropdown'}
                    required
                    items={test}
                />
                {/* this might seem unnecessary but somehow this prevents
                rerendering of two dropDown inputs on change of every other
                input... IDK why */}
                <DropDownWrapper control={control} test={test} />
                <CustomDatePicker name="date" control={control} />
            </form>
            <DevTool control={control} />{' '}
        </HeaderWrapper>
    )
}

export default CreateTaskPage

import InputField from '@/components/Inputs/InputField'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import HeaderWrapper from '@/layouts/HeaderWrapper'
import { DevTool } from '@hookform/devtools'
import DropDown from '@/components/DropDown/DropDown'

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

    return (
        <FormProvider {...methods}>
            <HeaderWrapper text="შექმენი ახალი დავალება">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="isolate mt-[30px] grid grid-cols-[550px_550px] justify-around gap-y-[55px] rounded-sm px-[55px] pt-[65px] pb-[62px]"
                >
                    <InputField
                        name="title"
                        title="სათაური"
                        required
                        type="text"
                    />
                    <DropDown
                        name="department"
                        title="დეპარტამენტი"
                        required
                        items={[
                            { id: 1, name: 'gela' },
                            { id: 2, name: 'dad' },
                            { id: 3, name: 'dada' },
                        ]}
                    />
                    <InputField
                        name="description"
                        title="აღწერა"
                        required
                        type="textarea"
                    />
                    <DropDown
                        name="employee"
                        title="პასუხისმგებელი თანამშრომელი"
                        required
                        items={[
                            { id: 1, name: 'gela' },
                            { id: 2, name: 'dad' },
                            { id: 3, name: 'dada' },
                        ]}
                    />
                    <div className="flex flex-row justify-between">
                        <DropDown
                            name="employee"
                            title="პასუხისმგებელი თანამშრომელი"
                            required
                            items={[
                                { id: 1, name: 'gela' },
                                { id: 2, name: 'dad' },
                                { id: 3, name: 'dada' },
                            ]}
                        />
                        <DropDown
                            name="employee"
                            title="პასუხისმგებელი თანამშრომელი"
                            required
                            items={[
                                { id: 1, name: 'gela' },
                                { id: 2, name: 'dad' },
                                { id: 3, name: 'dada' },
                            ]}
                        />
                    </div>
                </form>
                <DevTool control={control} />{' '}
            </HeaderWrapper>
        </FormProvider>
    )
}

export default CreateTaskPage

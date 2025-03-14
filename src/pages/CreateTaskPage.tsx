import InputField from '@/components/Inputs/InputField'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import HeaderWrapper from '@/layouts/HeaderWrapper'
import { DevTool } from '@hookform/devtools'

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
                    className="isolate mt-[30px] flex flex-col items-start gap-[55px] rounded-sm px-[55px] pt-[65px] pb-[62px]"
                >
                    <InputField
                        name="title"
                        title="სათაური"
                        required
                        type="text"
                    />
                    <InputField
                        name="description"
                        title="აღწერა"
                        required
                        type="textarea"
                    />

                    <input type="submit" />
                </form>
                <DevTool control={control} />{' '}
            </HeaderWrapper>
        </FormProvider>
    )
}

export default CreateTaskPage

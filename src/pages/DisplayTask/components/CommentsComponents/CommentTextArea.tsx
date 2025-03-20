import { createNewComment } from '@/api/postRequest'
import { commentPostSchema } from '@/api/schemas/apiPostSchemas'
import RoundButton from '@/components/Buttons/RoundButton'
import InputTextDesign from '@/components/Input/InputTextDesign'
import { DevTool } from '@hookform/devtools'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type CommentTextAreaProps = {
    parent_id?: number | null
    taskId: number
    onComment: () => void
}

export function CommentTextArea({
    parent_id = null,
    taskId,
    onComment,
}: CommentTextAreaProps) {
    const { control, handleSubmit, reset } = useForm<commentPostSchema>({
        mode: 'all',
        defaultValues: {
            text: '',
        },
    })

    const invokeCreateComment = async (data: commentPostSchema) => {
        await createNewComment(
            { text: data.text, parent_id: parent_id },
            taskId
        )
        onComment()
    }

    const onSubmit: SubmitHandler<commentPostSchema> = (data) => {
        console.log({ text: data.text, parent_id: parent_id })
        invokeCreateComment(data)
        reset()
    }

    return (
        <form className="relative" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name="text"
                render={({ field }) => (
                    <InputTextDesign
                        type="textarea"
                        placeholder="დაწერე კომენტარი"
                        customDivClass="rounded-[10px] px-5 pt-[18px] pb-[15px] font-book"
                        field={field}
                    />
                )}
            />

            <RoundButton
                text="დააკომენტარე"
                type="submit"
                customClass="bottom-[15px] absolute right-5"
            />
            {/* <DevTool control={control} /> */}
        </form>
    )
}

export default CommentTextArea

import { changeTaskStatus } from '@/api/putRequest'
import { changeTaskStatusSchema } from '@/api/schemas/apiPutSchema'
import DropDown from '@/components/DropDown/DropDown'
import { useStatusesContext } from '@/contexts/mainContext'
import { SubmitHandler, useForm } from 'react-hook-form'

type TaskStatusSetter = changeTaskStatusSchema

type TaskDropDownWrapperProps = {
    task_id: number
    chosenStatusIdProp?: number | undefined
}
const TaskDropDownWrapper = ({
    task_id,
    chosenStatusIdProp,
}: TaskDropDownWrapperProps) => {
    const statuses = useStatusesContext()
    const methods = useForm<TaskStatusSetter>({
        defaultValues: { status_id: chosenStatusIdProp },
        mode: 'all',
    })

    const { control, handleSubmit } = methods

    const onSubmit: SubmitHandler<TaskStatusSetter> = (data) => {
        changeTaskStatus(data, task_id)
    }

    return (
        <form>
            <DropDown
                control={control}
                name={'status_id'}
                items={statuses}
                selectedItem={
                    chosenStatusIdProp ? statuses[chosenStatusIdProp - 1] : null
                }
                onChange={handleSubmit(onSubmit)}
            />
        </form>
    )
}

export default TaskDropDownWrapper

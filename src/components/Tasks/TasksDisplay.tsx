import { statusSchema } from '@/api/schemas/apiSchemas'
import TasksColumn from '@/components/Tasks/TasksColumn'

type TasksDisplayProps = {
    statuses: statusSchema[]
}

const TasksDisplay = ({ statuses }: TasksDisplayProps) => {
    return (
        <div className="mt-6 grid grid-cols-4 gap-[52px]">
            {statuses.map((status) => (
                <TasksColumn
                    statusId={status.id}
                    title={status.name}
                    key={'task' + status.id}
                />
            ))}
        </div>
    )
}

export default TasksDisplay

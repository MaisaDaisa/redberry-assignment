import TaskCard from './TaskCard/TaskCard'
import { statusStyles } from '@/components/Tasks/TaskStatusColorEnum'

type TasksColumnProps = {
    statusId?: number
}

const TasksColumn = ({ statusId = 1 }: TasksColumnProps) => {
    return (
        <div className="flex flex-col gap-[30px]">
            <div
                className={`flex justify-center rounded-[10px] py-[15px] ${statusStyles[statusId].backgroundColor} `}
            >
                <p className="text-xl font-medium text-white">დასაწყები</p>
            </div>
            <div className="flex flex-col gap-[30px]">
                <TaskCard statusId={statusId} />
                <TaskCard statusId={statusId} />
                <TaskCard statusId={statusId} />
                <TaskCard statusId={statusId} />
                <TaskCard statusId={statusId} />
                <TaskCard statusId={statusId} />
                <TaskCard statusId={statusId} />
                <TaskCard statusId={statusId} />
            </div>
        </div>
    )
}

export default TasksColumn

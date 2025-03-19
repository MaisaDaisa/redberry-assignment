import { statusStyles } from '@/components/Tasks/TaskStatusColorEnum'

type TasksColumnProps = {
    statusId?: number
    title: string
    children?: React.ReactNode
}

const TasksColumn = ({ statusId = 1, title, children }: TasksColumnProps) => {
    return (
        <div className="flex flex-col gap-[30px]">
            <div
                className={`flex justify-center rounded-[10px] py-[15px] ${statusStyles[statusId].backgroundColor} `}
            >
                <p className="text-xl font-medium text-white">{title}</p>
            </div>
            <div className="flex flex-col gap-[30px]">{children}</div>
        </div>
    )
}

export default TasksColumn

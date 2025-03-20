import { taskSchema } from '@/api/schemas/apiSchemas'
import DepartmentRounded from '@/components/DepartmentRounded'
import TaskPriorityBordered from '@/components/TaskPriorityBordered'
import { statusStyles } from '@/components/Tasks/TaskStatusColorEnum'
import { months } from '@/utils/months'
import { Link } from 'react-router'

type TaskCardProps = {
    statusId?: number
    task: taskSchema
}

const TaskCard = ({ statusId = 2, task }: TaskCardProps) => {
    const due_Date = new Date(task.due_date)
    return (
        <Link
            to={'./task/' + task.id}
            className={`flex flex-col items-center gap-7 rounded-[15px] border p-5 ${statusStyles[statusId].borderColor}`}
        >
            <div className="flex w-full items-center justify-between">
                <div className="flex gap-[10px]">
                    <TaskPriorityBordered {...task.priority} />
                    {/* <DepartmentRounded
                        departmentId={task.department.id}
                        departmentText={task.department.name}
                    /> */}
                </div>
                <p className="text-gray-Shades-Headlines text-sm">
                    {due_Date.getDate()}{' '}
                    {months[due_Date.getMonth() - 1].substring(0, 3)},{' '}
                    {due_Date.getFullYear()}
                </p>
            </div>
            <div className="flex w-full flex-col items-start gap-3">
                <h5 className="text-[15px] font-medium">
                    {task.name && task.name}
                </h5>
                <p className="text-sm">
                    {task.description && task.description.length > 0
                        ? task.description.substring(0, 100).trim() + '...'
                        : task.description}
                </p>
            </div>
            <div className="flex w-full items-center justify-between">
                <img
                    src={
                        task.employee.avatar
                            ? task.employee.avatar
                            : 'https://picsum.photos/200/200'
                    }
                    alt={
                        task.employee.name +
                        ' ' +
                        task.employee.surname +
                        ' avatar'
                    }
                    className="h-8 w-8 rounded-full"
                />
                <div className="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                    >
                        <path
                            d="M3.08086 2.25977C1.87258 2.25977 0.880859 3.25148 0.880859 4.45977V15.0198C0.880859 16.228 1.87258 17.2198 3.08086 17.2198H4.88211C4.94227 17.7491 4.93539 18.239 4.79961 18.6498C4.63289 19.1551 4.3218 19.5796 3.74086 19.9285C3.57758 20.0316 3.50195 20.2293 3.5518 20.4149C3.60164 20.6005 3.76836 20.7329 3.96086 20.7398C5.82742 20.7398 7.96727 19.7652 9.04836 17.2198H18.9209C20.1291 17.2198 21.1209 16.228 21.1209 15.0198V4.45977C21.1209 3.25148 20.1291 2.25977 18.9209 2.25977H3.08086ZM3.08086 3.13977H18.9209C19.6496 3.13977 20.2409 3.73102 20.2409 4.45977V15.0198C20.2409 15.7485 19.6496 16.3398 18.9209 16.3398H8.80086C8.61695 16.3398 8.45195 16.4549 8.38836 16.6285C7.7043 18.4951 6.48227 19.3837 5.21211 19.7085C5.38398 19.4627 5.54727 19.2032 5.63836 18.9248C5.86695 18.2304 5.84805 17.4707 5.70711 16.6973C5.66758 16.4927 5.49055 16.3432 5.28086 16.3398H3.08086C2.35211 16.3398 1.76086 15.7485 1.76086 15.0198V4.45977C1.76086 3.73102 2.35211 3.13977 3.08086 3.13977Z"
                            fill="#212529"
                        />
                    </svg>
                    <h6 className="text-sm">{task.total_comments}</h6>
                </div>
            </div>
        </Link>
    )
}

export default TaskCard

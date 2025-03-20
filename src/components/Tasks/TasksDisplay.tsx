import { statusSchema, taskSchema } from '@/api/schemas/apiSchemas'
import TasksColumn from '@/components/Tasks/TasksColumn'
import { useMemo } from 'react'
import TaskCard from './TaskCard/TaskCard'
import useStatusesContext from '@/contexts/AllPages/useStatusesContext'
import { filterValues } from '@/pages/IndexPage'
import orderByStatus from '@/utils/orderByStatus'

type TasksDisplayProps = {
    tasks: taskSchema[]
    filters: filterValues
}

const filterTasks = (tasks: taskSchema[][], filters: filterValues) => {
    return tasks.map((statusTasks) =>
        statusTasks.filter((task: taskSchema) => {
            const departmentBool =
                filters.departments.length === 0 ||
                filters.departments.some(
                    (department) => department.id === task.department.id
                )
            const priorityBool =
                filters.priorities.length === 0 ||
                filters.priorities.some(
                    (priority) => priority.id === task.priority.id
                )
            const employeeBool =
                !filters.employee || filters.employee.id === task.employee.id
            console.log(task)
            console.log(departmentBool, priorityBool, employeeBool)
            return departmentBool && priorityBool && employeeBool
        })
    )
}

const TasksDisplay = ({ tasks, filters }: TasksDisplayProps) => {
    const statuses: statusSchema[] = useStatusesContext()

    const filteredTasks = useMemo(() => {
        return filterTasks(orderByStatus(tasks), filters)
    }, [tasks, filters])

    return (
        <div className="mt-6 grid grid-cols-4 gap-8">
            {filteredTasks.length === 0 && (
                <div className="col-span-4 text-center text-gray-500">
                    No tasks match the selected filters.
                </div>
            )}
            {filteredTasks.length > 0 &&
                statuses.map((status) => (
                    <TasksColumn
                        statusId={status.id}
                        title={status.name}
                        key={'taskCol' + status.id}
                        aria-label={`Tasks for status: ${status.name}`}
                    >
                        {filteredTasks[status.id - 1]?.length > 0 &&
                            filteredTasks[status.id - 1].map((task) => (
                                <TaskCard
                                    statusId={status.id}
                                    task={task}
                                    key={'taskCard' + task.id}
                                />
                            ))}
                    </TasksColumn>
                ))}
        </div>
    )
}

export default TasksDisplay

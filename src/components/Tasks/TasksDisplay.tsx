import { getAllTasks } from '@/api/getRequest'
import { statusSchema, taskSchema } from '@/api/schemas/apiSchemas'
import TasksColumn from '@/components/Tasks/TasksColumn'
import orderByStatus from '@/utils/orderByStatus'
import { useEffect, useState } from 'react'
import TaskCard from './TaskCard/TaskCard'

type TasksDisplayProps = {
    statuses: statusSchema[]
}

const TasksDisplay = ({ statuses }: TasksDisplayProps) => {
    const [tasks, setTasks] = useState<taskSchema[][] | []>([])

    useEffect(() => {
        const fetchData = async () => {
            setTasks(orderByStatus({ tasks: await getAllTasks() }))
        }
        fetchData()
    }, [])
    return (
        <div className="mt-6 grid grid-cols-4 gap-8">
            {tasks.length > 0 &&
                statuses.map((status) => {
                    console.log(tasks)
                    return (
                        <TasksColumn
                            statusId={status.id}
                            title={status.name}
                            key={'task' + status.id}
                        >
                            {tasks[status.id - 1].length > 0 &&
                                tasks[status.id - 1].map((task) => (
                                    <TaskCard
                                        statusId={status.id}
                                        task={task}
                                    />
                                ))}
                        </TasksColumn>
                    )
                })}
        </div>
    )
}

export default TasksDisplay

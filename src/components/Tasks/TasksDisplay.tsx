import { getAllTasks } from '@/api/getRequest'
import { statusSchema, taskSchema } from '@/api/schemas/apiSchemas'
import TasksColumn from '@/components/Tasks/TasksColumn'
import { useEffect, useState } from 'react'

type TasksDisplayProps = {
    statuses: statusSchema[]
}

const TasksDisplay = ({ statuses }: TasksDisplayProps) => {
    const [tasks, setTasks] = useState<taskSchema[] | []>([])

    useEffect(() => {
        const fetchData = async () => {
            setTasks(await getAllTasks())
        }
        fetchData()
    }, [])
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

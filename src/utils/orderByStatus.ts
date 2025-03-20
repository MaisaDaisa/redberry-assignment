import { taskSchema } from '@/api/schemas/apiSchemas'

export const orderByStatus = (
    tasks: taskSchema[],
    numOfStatuses: number = 4
): taskSchema[][] => {
    if (tasks.length === 0) return []
    const groupedTasks: taskSchema[][] = Array.from(
        { length: numOfStatuses },
        () => []
    )

    tasks.forEach((task) => {
        const index = task.status.id - 1
        if (index >= 0 && index < numOfStatuses) {
            groupedTasks[index].push(task)
        }
    })

    return groupedTasks
}

export default orderByStatus

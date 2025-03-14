export enum TaskStatusColorEnum {
    yellow = 1,
    orange,
    pink,
    blue,
}

type StatusStyle = {
    borderColor: string
    backgroundColor: string
}

export const statusStyles: Record<TaskStatusColorEnum | number, StatusStyle> = {
    [TaskStatusColorEnum.yellow]: {
        borderColor: 'border-(--color-status-yellow)',
        backgroundColor: 'bg-(--color-status-yellow)',
    },
    [TaskStatusColorEnum.orange]: {
        borderColor: 'border-(--color-status-orange)',
        backgroundColor: 'bg-(--color-status-orange)',
    },
    [TaskStatusColorEnum.pink]: {
        borderColor: 'border-(--color-status-pink)',
        backgroundColor: 'bg-(--color-status-pink)',
    },
    [TaskStatusColorEnum.blue]: {
        borderColor: 'border-(--color-status-blue)',
        backgroundColor: 'bg-(--color-status-blue)',
    },
}

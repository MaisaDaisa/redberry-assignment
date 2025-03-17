import High from '@/assets/imgs/High.svg'
import Medium from '@/assets/imgs/Medium.svg'
import Low from '@/assets/imgs/Low.svg'

export enum TaskPriorityTypes {
    high = 1,
    medium,
    low,
}

export const priorityStyles = {
    [TaskPriorityTypes.high]: {
        borderColor: `border-(--color-high-priority)`,
        textColor: `text-(--color-high-priority)`,
        image: High,
    },
    [TaskPriorityTypes.medium]: {
        borderColor: `border-(--color-medium-priority)`,
        textColor: `text-(--color-medium-priority)`,
        image: Medium,
    },
    [TaskPriorityTypes.low]: {
        borderColor: `border-(--color-low-priority)`,
        textColor: `text-(--color-low-priority)`,
        image: Low,
    },
}

interface TaskPriorityBorderedProps {
    prioritySchema?: TaskPriorityTypes
    priorityText?: string
}

const TaskPriorityBordered = ({
    prioritySchema = TaskPriorityTypes.high,
    priorityText = 'TEST',
}: TaskPriorityBorderedProps) => {
    const { borderColor, textColor, image } = priorityStyles[prioritySchema]

    return (
        <div
            className={`flex items-center gap-1 rounded-sm border-[0.5px] p-1 ${borderColor}`}
        >
            <img src={image} alt={`${prioritySchema} priority icon`} />
            <p className={`text-xs font-medium select-none ${textColor}`}>
                {priorityText}
            </p>
        </div>
    )
}

export default TaskPriorityBordered

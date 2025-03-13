import High from '@/assets/imgs/High.svg'
import Medium from '@/assets/imgs/Medium.svg'
import Low from '@/assets/imgs/Low.svg'

enum TaskPriorityTypes {
    high = 'high-priority',
    medium = 'medium-priority',
    low = 'low-priority',
}

// Map priority types to their corresponding styles and images
const priorityStyles = {
    [TaskPriorityTypes.high]: {
        borderColor: 'border-(--color-high-priority)', // Example Tailwind class for high priority
        textColor: 'text-(--color-high-priority)', // Example Tailwind class for high priority
        image: High,
    },
    [TaskPriorityTypes.medium]: {
        borderColor: 'border-(--color-medium-priority)', // Example Tailwind class for medium priority
        textColor: 'text-(--color-medium-priority)', // Example Tailwind class for medium priority
        image: Medium,
    },
    [TaskPriorityTypes.low]: {
        borderColor: 'border-(--color-low-priority)', // Example Tailwind class for low priority
        textColor: 'text-(--color-low-priority)', // Example Tailwind class for low priority
        image: Low,
    },
}

interface TaskPriorityBorderedProps {
    priorityType?: TaskPriorityTypes
    priorityText?: string
}

const TaskPriorityBordered = ({
    priorityType = TaskPriorityTypes.high,
    priorityText = 'TEST',
}: TaskPriorityBorderedProps) => {
    // Get the styles and image based on the priority type
    const { borderColor, textColor, image } = priorityStyles[priorityType]

    return (
        <div
            className={`flex items-center gap-1 rounded-sm border-[0.5px] p-1 ${borderColor}`}
        >
            <img src={image} alt={`${priorityType} priority icon`} />
            <p className={`text-xs font-medium select-none ${textColor}`}>
                {priorityText}
            </p>
        </div>
    )
}

export default TaskPriorityBordered

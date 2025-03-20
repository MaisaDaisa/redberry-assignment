export const TaskPriorityStyles = [
    {
        borderColor: `border-(--color-low-priority)`,
        textColor: `text-(--color-low-priority)`,
    },

    {
        borderColor: `border-(--color-medium-priority)`,
        textColor: `text-(--color-medium-priority)`,
    },
    {
        borderColor: `border-(--color-high-priority)`,
        textColor: `text-(--color-high-priority)`,
    },
]

type TaskPriorityBorderedProps = {
    id: number
    name: string
    icon: string
}

const TaskPriorityBordered = ({
    id,
    icon,
    name,
}: TaskPriorityBorderedProps) => {
    const stylesValues = TaskPriorityStyles[id - 1]
    return (
        <div
            className={`flex items-center gap-1 rounded-sm border-[0.5px] p-1 ${stylesValues.borderColor}`}
        >
            <img src={icon} alt={`${name} priority icon`} />
            <p
                className={`text-xs font-medium select-none ${stylesValues.textColor}`}
            >
                {name}
            </p>
        </div>
    )
}

export default TaskPriorityBordered

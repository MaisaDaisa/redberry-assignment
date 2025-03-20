type DropDownPriorityProps = {
    iconUrl: string
    text: string
}

const DropDownPriority = ({ text, iconUrl }: DropDownPriorityProps) => {
    return (
        <div className="flex flex-row items-center gap-[6px]">
            <img
                src={iconUrl}
                alt={text}
                className="h-4 w-4 rounded-full object-cover object-center"
            />
            <p className="text-sm font-light">{text}</p>
        </div>
    )
}

export default DropDownPriority

import React from 'react'
import DropDownChoiceWrapper from './DropDownChoiceWrapper'

type DropDownPriorityProps = {
    onClick: () => void
    iconUrl: string
    text: string
}

const DropDownPriority = ({
    onClick,
    text,
    iconUrl,
}: DropDownPriorityProps) => {
    return (
        <DropDownChoiceWrapper onClick={onClick}>
            <div className="flex flex-row items-center gap-[6px]">
                <img
                    src={iconUrl}
                    alt={text}
                    className="h-4 w-4 rounded-full object-cover object-center"
                />
                <p className="text-sm font-light">{text}</p>
            </div>
        </DropDownChoiceWrapper>
    )
}

export default DropDownPriority

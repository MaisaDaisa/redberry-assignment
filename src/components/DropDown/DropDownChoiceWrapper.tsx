import React from 'react'

type DropDownChoiceWrapperProps = {
    children: React.ReactNode
    onClick: () => void
}

const DropDownChoiceWrapper = ({
    onClick,
    children,
}: DropDownChoiceWrapperProps) => {
    return (
        <li onClick={onClick} className="flex cursor-pointer p-[14px]">
            {children}
        </li>
    )
}

export default DropDownChoiceWrapper

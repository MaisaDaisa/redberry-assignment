import React from 'react'

type DropDownChoiceWrapperProps = {
    children: React.ReactNode
    onClick: () => void
    noHover?: boolean
}

const DropDownChoiceWrapper = ({
    noHover = false,
    onClick,
    children,
}: DropDownChoiceWrapperProps) => {
    return (
        <li
            onClick={onClick}
            className={
                'flex cursor-pointer p-[14px] ' +
                (noHover ? '' : 'hover:bg-gray-50')
            }
        >
            {children}
        </li>
    )
}

export default DropDownChoiceWrapper

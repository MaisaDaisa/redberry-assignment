import React from 'react'
type ButtonProps = {
    text: string
}

const RoundButton = ({ text }: ButtonProps) => {
    return (
        <button className="font-Fira-Go hover:bg-purple-hover flex cursor-pointer flex-row items-center gap-1 rounded-[5px] rounded-full bg-(--color-purple-accent) px-[20px] py-[8px] text-white transition-colors duration-150 ease-in-out">
            <p>{text}</p>
        </button>
    )
}

export default RoundButton

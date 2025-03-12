import React from 'react'
type ButtonProps = {
    text: string
    onClickHandler: () => any
}

const RoundButton = ({ text, onClickHandler = () => {} }: ButtonProps) => {
    return (
        <button
            className="font-Fira-Go hover:bg-purple-hover flex cursor-pointer flex-row items-center gap-1 rounded-full bg-(--color-purple-accent) px-[20px] py-[8px] text-white transition-colors duration-150 ease-in-out"
            onClick={onClickHandler}
        >
            <p>{text}</p>
        </button>
    )
}

export default RoundButton

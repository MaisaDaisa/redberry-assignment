type ButtonProps = {
    text: string
    onClickHandler: () => any
    type?: 'submit' | 'reset' | 'button' | undefined
}

const RoundButton = ({
    text,
    onClickHandler = () => {},
    type = 'button',
}: ButtonProps) => {
    return (
        <button
            type={type}
            className="font-Fira-Go hover:bg-purple-hover flex cursor-pointer flex-row items-center gap-1 rounded-full bg-(--color-purple-accent) px-[20px] py-[8px] text-white transition-colors duration-150 ease-in-out"
            onClick={onClickHandler}
        >
            <p>{text}</p>
        </button>
    )
}

export default RoundButton

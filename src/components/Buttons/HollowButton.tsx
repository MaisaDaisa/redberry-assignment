type ButtonProps = {
    text: string
    onClick: () => any
}

const HollowButton = ({ text, onClick }: ButtonProps) => {
    return (
        <button
            className="font-Fira-Go text-gray-Shades-Headlines hover:border-purple-hover cursor-pointer rounded-[5px] border-[1px] border-solid border-(--color-purple-accent) bg-white px-[20px] py-[10px] transition-colors duration-150 ease-in-out"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default HollowButton

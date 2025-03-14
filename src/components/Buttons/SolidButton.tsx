type ButtonProps = {
    text: string
}

const SolidButton = ({ text }: ButtonProps) => {
    return (
        <button className="font-Fira-Go hover:bg-purple-hover flex cursor-pointer flex-row items-center gap-1 rounded-[5px] bg-(--color-purple-accent) px-[20px] py-[10px] text-white transition-colors duration-150 ease-in-out">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
            >
                <path
                    d="M5 10H15"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M10 15V5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <p>{text}</p>
        </button>
    )
}

export default SolidButton

export enum InputErrorMessagesTypes {
    default = 'var(--color-gray-shade-validation)',
    invalid = 'var(--color-high-priority)',
    valid = 'var(--color-low-priority)',
}

type InputErrorMessageProps = {
    validationType: InputErrorMessagesTypes
    message?: string
}

function InputErrorMessage({
    validationType,
    message,
}: InputErrorMessageProps) {
    if (!message) return null

    return (
        <span
            className="font-book flex items-center gap-[2px] text-[10px]"
            style={{ color: validationType }} // Apply color to text
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
            >
                <path
                    d="M13.3327 4L5.99935 11.3333L2.66602 8"
                    stroke={validationType}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            {message}
        </span>
    )
}

export default InputErrorMessage

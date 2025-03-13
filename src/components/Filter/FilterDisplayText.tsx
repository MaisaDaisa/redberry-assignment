type FilterDisplayTextProps = {
    text: string
    setState?: React.Dispatch<React.SetStateAction<null>>
    onClickHandler: () => void
}

const FilterDisplayText = ({
    text,
    onClickHandler,
}: FilterDisplayTextProps) => {
    return (
        <div className="border-gray-shades-15 flex flex-nowrap items-center justify-center gap-1 rounded-full border px-[10px] py-[6px]">
            <p className="text-gray-Shades-Headlines text-sm text-nowrap select-none">
                {text}
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                className="cursor-pointer"
                onClick={onClickHandler}
            >
                <path
                    d="M10.5 4L3.5 11"
                    stroke="#343A40"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M3.5 4L10.5 11"
                    stroke="#343A40"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    )
}

export default FilterDisplayText

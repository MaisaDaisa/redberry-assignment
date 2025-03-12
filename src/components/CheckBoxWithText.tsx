import checkMark from '@/assets/imgs/checkMark.svg'

interface CheckBoxWithTextProps {
    isChecked?: boolean
    text: string
    onClickHandler?: () => void
}
const CheckBoxWithText = ({
    isChecked = false,
    text,
    onClickHandler,
}: CheckBoxWithTextProps) => {
    return (
        <div className="flex flex-row items-center gap-[15px]">
            <div className="border-y-purple-accent flex h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-md border-[1.5px] border-solid">
                {isChecked && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                    >
                        <path
                            d="M12.3333 1.33337L4.99996 8.66671L1.66663 5.33337"
                            stroke="#8338EC"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                )}
            </div>
            <p className="">{text}</p>
        </div>
    )
}

export default CheckBoxWithText

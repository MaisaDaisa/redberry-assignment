import React from 'react'

export type CheckBoxWrapperProps = {
    isChecked: boolean
    onClickHandler?: () => void
}

const CheckBoxWrapper = ({
    isChecked,
    children,
    onClickHandler,
}: CheckBoxWrapperProps & {
    children: React.ReactNode
}) => {
    return (
        <div
            className="flex flex-row items-center gap-[15px]"
            onClick={onClickHandler}
        >
            <div className="border-purple-accent flex h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-md border-[1.5px] border-solid">
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
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </div>
            {children}
        </div>
    )
}

export default CheckBoxWrapper

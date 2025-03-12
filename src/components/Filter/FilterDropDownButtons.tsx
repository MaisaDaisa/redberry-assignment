import React, { memo } from 'react'
import FilterConfirmButton from './FilterConfirmButton'

interface FilterDropDownButtonsProps {
    filterText: string
    isActive?: boolean
    handleSetActive?: () => void
    children?: React.ReactNode
}

const FilterDropDownButtons = memo(
    ({
        filterText,
        isActive = false,
        handleSetActive = () => {},
        children,
    }: FilterDropDownButtonsProps) => {
        return (
            <div>
                <div
                    className={`flex w-[200px] cursor-pointer items-start justify-center gap-2 px-[18px] transition-all duration-300`}
                    onClick={handleSetActive}
                >
                    <p
                        className={`${isActive ? 'color-(--color-purple-accent)' : ''} select-none`}
                        style={{
                            color: isActive ? 'var(--color-purple-accent)' : '',
                        }}
                    >
                        {filterText}
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`transition-all duration-300 select-none ${isActive ? '-rotate-180' : 'rotate-0'}`}
                    >
                        <path
                            d="M6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L12 13.5858L6.70711 8.29289Z"
                            fill={
                                isActive
                                    ? 'var(--color-purple-accent)'
                                    : '#0D0F10'
                            }
                        />
                    </svg>
                </div>

                {
                    <div
                        className={`border-purple-accent absolute z-10 flex w-full translate-y-5 transform flex-col gap-6 self-start rounded-[10px] border-[0.5px] bg-white px-[30px] pt-10 pb-5 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
                    >
                        {children}
                        <FilterConfirmButton onConfirm={() => {}} />
                    </div>
                }
            </div>
        )
    }
)

export default FilterDropDownButtons

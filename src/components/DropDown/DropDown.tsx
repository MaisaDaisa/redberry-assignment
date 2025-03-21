import { useState, JSX, useRef, useEffect } from 'react'
import { Control, useController } from 'react-hook-form'
import DropDownText from './DropDownText'
import { useClickOutside } from '@/hooks/useClickOutside'
import DropDownChoiceWrapper from './DropDownChoiceWrapper'

export type DropDownProps = {
    additionalComponent?: JSX.Element
    name: string
    items: any[]
    placeholder?: string
    control: Control<any>
    renderItem?: (item: any) => JSX.Element
    selectedItem?: any | null
    onChange?: () => any
    customDropDownStyles?: string
    noHover?: boolean
}

const DropDown = ({
    noHover = true,
    onChange = () => {},
    customDropDownStyles = '',
    selectedItem = null,
    control,
    name,
    additionalComponent,
    items,
    renderItem,
    placeholder = 'Select an option',
}: DropDownProps) => {
    const dropDownRef = useRef<HTMLDivElement>(null)

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
        rules: {
            required: true,
        },
    })

    const [toggleCombo, setToggleCombo] = useState(false)
    const [selected, setSelected] = useState<{
        id: number
        name: string
    } | null>(items.find((item) => item.id === field.value))

    //
    useClickOutside(dropDownRef, () => {
        setToggleCombo(false)
    })

    const handleSelectedItem = (item: { id: number; name: string }) => {
        setSelected(item)
        field.onChange(item.id)
        setToggleCombo(false)
        onChange()
    }

    return (
        <>
            <div
                className="relative w-full text-sm font-light"
                ref={dropDownRef}
            >
                <div
                    onClick={() => setToggleCombo(!toggleCombo)}
                    className={`text-gray-Shades-Headlines flex w-full min-w-[200px] flex-row items-center justify-between rounded-t-[5px] border bg-white focus:outline-none ${
                        error
                            ? 'border-high-priority'
                            : toggleCombo
                              ? 'border-purple-accent'
                              : 'border-gray-shade-10'
                    } ${!toggleCombo ? 'rounded-b-md' : 'border-b-0'}`}
                >
                    <div className="w-full overflow-hidden text-nowrap">
                        {selected ? (
                            renderItem ? (
                                <DropDownChoiceWrapper
                                    onClick={() => {}}
                                    noHover={noHover}
                                >
                                    {renderItem(selected)}
                                </DropDownChoiceWrapper>
                            ) : (
                                <DropDownText
                                    noHover={noHover}
                                    key={selected.name + selected.id}
                                    onClick={() => {}}
                                    text={selected.name}
                                />
                            )
                        ) : (
                            <DropDownChoiceWrapper
                                noHover={noHover}
                                onClick={() => {}}
                            >
                                <span className="text-gray-400">
                                    {placeholder}
                                </span>
                            </DropDownChoiceWrapper>
                        )}
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        className={`m-[14px] transition-all duration-300 ${toggleCombo ? '-rotate-180' : 'rotate-0'}`}
                    >
                        <path
                            d="M11.62 5.7207L7.81667 9.52404C7.3675 9.9732 6.6325 9.9732 6.18334 9.52404L2.38 5.7207"
                            stroke="#343A40"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                {toggleCombo && (
                    <ul
                        className={`no-scrollbar absolute z-10 w-full overflow-y-scroll rounded-b-[5px] border border-t-0 bg-white ${toggleCombo ? 'border-purple-accent' : 'border-gray-shade-10'} ${customDropDownStyles}`}
                    >
                        {additionalComponent}
                        {items.map((item) =>
                            renderItem ? (
                                <DropDownChoiceWrapper
                                    onClick={() => handleSelectedItem(item)}
                                >
                                    {renderItem(item)}
                                </DropDownChoiceWrapper>
                            ) : (
                                <DropDownText
                                    key={item.name + item.id}
                                    onClick={() => handleSelectedItem(item)}
                                    text={item.name}
                                />
                            )
                        )}
                    </ul>
                )}
            </div>

            {/* Hidden input to store the selected value in React Hook Form */}
            <input type="hidden" {...field} />

            {/* Display validation message */}
        </>
    )
}

export default DropDown

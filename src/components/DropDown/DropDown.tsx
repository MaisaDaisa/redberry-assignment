import { useState, JSX } from 'react'
import { Control, useController } from 'react-hook-form'
import TitleH4Component from '../../layouts/TitleH4Component'

type DropDownProps = {
    additionalComponent?: JSX.Element
    name: string
    title: string
    items: any[]
    required?: boolean
    placeholder?: string
    control: Control<any>
    h4CustomClasses?: string
}

const DropDown = ({
    control,
    title,
    required,
    name,
    additionalComponent,
    items,
    placeholder = 'Select an option',
    h4CustomClasses = '',
}: DropDownProps) => {
    const [toggleCombo, setToggleCombo] = useState(false)
    const [selected, setSelected] = useState<{
        id: string | number
        name: string
    } | null>(null)

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

    const handleSelectedItem = (item: {
        id: string | number
        name: string
    }) => {
        setSelected(item)
        // setValue(name, item.id, { shouldValidate: true })
        field.onChange(item)
        setToggleCombo(false)
    }

    return (
        <TitleH4Component
            title={title}
            required={required}
            h4CustomClasses={h4CustomClasses}
        >
            <div className="relative w-full text-sm font-light">
                <div
                    onClick={() => setToggleCombo(!toggleCombo)}
                    className={`text-gray-Shades-Headlines flex w-full min-w-[200px] flex-row items-center justify-between rounded-t-[5px] border bg-white p-[14px] focus:outline-none ${
                        error && !toggleCombo
                            ? 'border-high-priority'
                            : toggleCombo
                              ? 'border-purple-accent'
                              : 'border-gray-shade-10'
                    } ${!toggleCombo ? 'rounded-b-md' : 'border-b-0'}`}
                >
                    {selected ? (
                        selected.name
                    ) : (
                        <span className="text-gray-400">{placeholder}</span>
                    )}

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        className={`transition-all duration-300 ${toggleCombo ? '-rotate-180' : 'rotate-0'}`}
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
                        className={`absolute z-10 w-full rounded-b-[5px] border border-t-0 bg-white ${toggleCombo ? 'border-purple-accent' : 'border-gray-shade-10'}`}
                    >
                        {additionalComponent}
                        {items.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => handleSelectedItem(item)}
                                className="cursor-pointer px-[14px] py-[12px]"
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Hidden input to store the selected value in React Hook Form */}
            <input type="hidden" {...field} />

            {/* Display validation message */}
        </TitleH4Component>
    )
}

export default DropDown

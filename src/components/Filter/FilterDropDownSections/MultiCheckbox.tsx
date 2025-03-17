import { departmentSchema, prioritySchema } from '@/api/apiSchemas'
import CheckBoxWithText from '@/components/CheckBox/CheckBoxWithText'
import React from 'react'
import { UseFormSetValue } from 'react-hook-form'

type MultiCheckboxProps = {
    filters: departmentSchema[] | prioritySchema[]
    selectedValue: departmentSchema[] | prioritySchema[]
    setValue: UseFormSetValue<any>
    nameProp: string
}

const MultiCheckbox = ({
    filters,
    selectedValue,
    setValue,
    nameProp,
}: MultiCheckboxProps) => {
    const handleCheck = (valueToCheck: departmentSchema | prioritySchema) => {
        if (selectedValue.some((value) => value.id === valueToCheck.id)) {
            console.log('Removing:', valueToCheck)
            setValue(
                nameProp,
                selectedValue.filter((item) => item.id !== valueToCheck.id) // Remove selected
            )
        } else {
            console.log('Adding:', valueToCheck)
            setValue(nameProp, [...selectedValue, valueToCheck]) // Add selected
        }
    }
    return (
        <>
            {filters.map((filter) => (
                <CheckBoxWithText
                    key={filter.id}
                    isChecked={selectedValue.some(
                        (value) => value.id === filter.id
                    )}
                    text={filter.name}
                    onClickHandler={() => handleCheck(filter)}
                />
            ))}
        </>
    )
}

export default MultiCheckbox

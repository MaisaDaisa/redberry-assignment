import DropDownWithTitle from '@/components/DropDown/DropDownWithTitle'
import { useEffect, useState } from 'react'
import { Control, UseFormResetField, useWatch } from 'react-hook-form'
import { CreateTaskSchema } from '.'
import { employeeSchema } from '@/api/schemas/apiSchemas'
import DropDownChoiceWrapper from '@/components/DropDown/DropDownChoiceWrapper'
import AvatarWithTextInline from '@/components/AvatarWithTextInline'

type FilterEmployeesWrapperProps = {
    employees: employeeSchema[]
    control: Control<CreateTaskSchema, any>
    // setValue: UseFormSetValue<CreateTaskSchema>
    resetField: UseFormResetField<CreateTaskSchema>
}

const FilterEmployeesWrapper = ({
    employees,
    resetField,
    control,
}: FilterEmployeesWrapperProps) => {
    const [filteredEmployees, setFilteredEmployees] = useState<
        employeeSchema[]
    >([])
    const chosenDepartment = useWatch({
        control,
        name: 'department_id',
    })

    useEffect(() => {
        if (chosenDepartment) {
            resetField('employee_id')
            const filtered = employees.filter(
                (value) => value.department.id === chosenDepartment
            )
            setFilteredEmployees(filtered)
        }
    }, [chosenDepartment, employees])

    return (
        <>
            {chosenDepartment ? (
                <DropDownWithTitle
                    title="პასუხისმგებელი თანამშრომელი"
                    key={'employeeDropdown' + chosenDepartment}
                    required
                    dropDownProps={{
                        items: filteredEmployees,
                        control: control,
                        name: 'employee_id',
                        renderItem: (item, onClick) => (
                            <DropDownChoiceWrapper onClick={onClick}>
                                <AvatarWithTextInline
                                    avatarUrl={item.avatar}
                                    name={item.name}
                                    key={'avatar' + item.id}
                                />
                            </DropDownChoiceWrapper>
                        ),
                    }}
                />
            ) : (
                <div></div>
            )}
        </>
    )
}

export default FilterEmployeesWrapper

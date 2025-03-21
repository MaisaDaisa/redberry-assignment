import { employeeSchema } from '@/api/schemas/apiSchemas'
import AvatarWithTextInline from '@/components/AvatarWithTextInline'
import DropDownWithTitle from '@/components/DropDown/DropDownWithTitle'
import useFullScreenContext from '@/contexts/FullScreen/useFullScreenContext'
import { useEffect, useState } from 'react'
import { Control, UseFormResetField, useWatch } from 'react-hook-form'
import { CreateTaskSchema } from '..'
import AddEmployeeDropDownComp from '../components/AddEmployeeDropDownComp'

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

    const fullScreenContext = useFullScreenContext()

    const additionalComponent = (
        <AddEmployeeDropDownComp onClick={() => fullScreenContext()} />
    )

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
                        additionalComponent: additionalComponent,
                        name: 'employee_id',
                        renderItem: (item) => (
                            <AvatarWithTextInline
                                avatarUrl={item.avatar}
                                name={item.name + ' ' + item.surname}
                                key={'avatar' + item.id}
                            />
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

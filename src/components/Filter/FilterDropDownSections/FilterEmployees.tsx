import { employeeSchema } from '@/api/apiSchemas'
import CheckBoxWithText from '@/components/CheckBox/CheckBoxWithText'
import { UseFormSetValue } from 'react-hook-form'

type FilterEmployeesProps = {
    filters?: employeeSchema[]
    selectedValue?: employeeSchema
    setValue: UseFormSetValue<any>
    nameProp: string
}

const test: employeeSchema[] = [
    {
        id: 1,
        name: 'John',
        surname: 'Doe',
        avatar: 'https://picsum.photos/300/300',
        department_id: 1,
    },
    {
        id: 2,
        name: 'Jane',
        surname: 'Smith',
        avatar: 'https://picsum.photos/300/300',
        department_id: 2,
    },
    {
        id: 3,
        name: 'Alice',
        surname: 'Johnson',
        avatar: 'https://picsum.photos/300/300',
        department_id: 1,
    },
    {
        id: 4,
        name: 'Bob',
        surname: 'Brown',
        avatar: 'https://picsum.photos/300/300',
        department_id: 3,
    },
    {
        id: 5,
        name: 'Charlie',
        surname: 'Davis',
        avatar: 'https://picsum.photos/300/300',
        department_id: 2,
    },
]

const FilterEmployees = ({
    filters = test,
    selectedValue = test[0],
    setValue,
    nameProp,
}: FilterEmployeesProps) => {
    const handleCheck = (valueToCheck: employeeSchema) => {
        setValue(nameProp, valueToCheck)
    }
    return (
        <>
            {filters.map((filter) => (
                <CheckBoxWithText
                    key={nameProp + filter.id}
                    isChecked={selectedValue.id === filter.id}
                    text={filter.name}
                    onClickHandler={() => handleCheck(filter)}
                />
            ))}
        </>
    )
}

export default FilterEmployees

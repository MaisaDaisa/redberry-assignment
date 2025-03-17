import { useFormContext } from 'react-hook-form'
import FilterDisplayText from './FilterDisplayText'
import { departmentSchema } from '@/api/apiSchemas'

// Define the expected form type
type FormValues = {
    departments: departmentSchema[]
}

const FilterInlineDisplay = () => {
    const { watch, setValue } = useFormContext<FormValues>()

    // Watch for changes in "departments" field
    const formValues = watch() ?? { departments: [] } // Ensure a default value

    const handleRemoveDepartment = (departmentId: number) => {
        setValue(
            'departments',
            formValues.departments.filter((dep) => dep.id !== departmentId)
        )
    }

    return (
        <div className="mt-[25px] inline-flex h-[29px] w-full justify-start gap-4">
            {formValues.departments?.map((department) => (
                <FilterDisplayText
                    key={department.id}
                    text={department.name}
                    onClickHandler={() => handleRemoveDepartment(department.id)}
                />
            ))}
        </div>
    )
}

export default FilterInlineDisplay

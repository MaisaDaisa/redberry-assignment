import { useFormContext } from 'react-hook-form'
import FilterDisplayText from './FilterDisplayText'
import { filterValues } from '@/pages/IndexPage'

// Define the expected form type
const FilterInlineDisplay = () => {
    const { watch, setValue } = useFormContext<filterValues>()

    // Watch for changes in form fields
    const formValues = watch() ?? { departments: [], priorities: [] }

    const handleRemoveFromArray = (
        id: number,
        filterField: keyof filterValues
    ) => {
        setValue(
            filterField,
            // @ts-ignore it is an array, an array has filter i don't know that typescript is on about
            formValues[filterField].filter((item) => item.id !== id)
        )
        console.log(filterField)
    }

    return (
        <div className="mt-[25px] inline-flex h-[30px] w-full justify-start gap-4">
            {formValues.departments.length > 0 &&
                formValues.departments.map((department) => (
                    <FilterDisplayText
                        key={department.id}
                        text={department.name}
                        onClickHandler={() =>
                            handleRemoveFromArray(department.id, 'departments')
                        }
                    />
                ))}
            {formValues.priorities.length > 0 &&
                formValues.priorities.map((priority) => (
                    <FilterDisplayText
                        key={priority.id}
                        text={priority.name}
                        onClickHandler={() =>
                            handleRemoveFromArray(priority.id, 'priorities')
                        }
                    />
                ))}
        </div>
    )
}

export default FilterInlineDisplay

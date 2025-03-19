import { useFormContext } from 'react-hook-form'
import { filterValues } from '@/pages/IndexPage'
import FilterDisplayText from './FilterDisplayText'

const FilterInlineDisplay = ({}) => {
    const { watch, setValue, resetField } = useFormContext<filterValues>()

    const formValues = watch()

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
            {formValues?.departments.length > 0 &&
                formValues.departments.map((department) => (
                    <FilterDisplayText
                        key={department.id}
                        text={department.name}
                        onClickHandler={() =>
                            handleRemoveFromArray(department.id, 'departments')
                        }
                    />
                ))}
            {formValues?.priorities.length > 0 &&
                formValues.priorities.map((priority) => (
                    <FilterDisplayText
                        key={priority.id}
                        text={priority.name}
                        onClickHandler={() =>
                            handleRemoveFromArray(priority.id, 'priorities')
                        }
                    />
                ))}
            {formValues?.employee.name && (
                <FilterDisplayText
                    key={formValues?.employee.id}
                    text={
                        formValues?.employee.name +
                        ' ' +
                        formValues?.employee.surname
                    }
                    onClickHandler={() => resetField('employee')}
                />
            )}
        </div>
    )
}

export default FilterInlineDisplay

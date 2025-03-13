import CheckBoxWithText from '@/components/CheckBoxWithText'

const FilterDropDownDepartments = () => {
    return (
        <div className="flex flex-col flex-wrap items-start gap-x-[50px] gap-y-4">
            {['სალამი', 'yoooo'].map((region) => (
                <CheckBoxWithText
                    isChecked={true}
                    // key={}
                    text={region}
                    onClickHandler={
                        () => {}
                        // handleMultiChoiceRegionClick(region)
                    }
                />
            ))}
        </div>
    )
}

export default FilterDropDownDepartments

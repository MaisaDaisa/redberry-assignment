import RoundButton from '../../Buttons/RoundButton'

const FilterConfirmButton = ({ onConfirm }: { onConfirm: () => void }) => {
    return (
        <div className="flex flex-row justify-end">
            <RoundButton
                type="submit"
                text="არჩევა"
                onClickHandler={onConfirm}
            />
        </div>
    )
}

export default FilterConfirmButton

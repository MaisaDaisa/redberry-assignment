import HollowButton from '@/components/Buttons/HollowButton'
import SolidButton from '@/components/Buttons/SolidButton'

type AddEmployeeButtonWrapper = {
    toggleActive: () => void
}

export function AddEmployeeButtonWrapper({
    toggleActive,
}: AddEmployeeButtonWrapper) {
    return (
        <div className="mt-[65px] flex justify-end gap-[22px]">
            <HollowButton text="გაუქმება" onClick={() => toggleActive()} />
            <SolidButton text="დაამატე თანამშრომელია" type="submit" />
        </div>
    )
}

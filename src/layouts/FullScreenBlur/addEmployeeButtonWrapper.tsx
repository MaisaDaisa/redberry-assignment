import HollowButton from '@/components/Buttons/HollowButton'
import SolidButton from '@/components/Buttons/SolidButton'

export function AddEmployeeButtonWrapper({}) {
    return (
        <div className="mt-[65px] flex justify-end gap-[22px]">
            <HollowButton text="გაუქმება" onClick={() => {}} />
            <SolidButton text="დაამატე თანამშრომელია" type="submit" />
        </div>
    )
}

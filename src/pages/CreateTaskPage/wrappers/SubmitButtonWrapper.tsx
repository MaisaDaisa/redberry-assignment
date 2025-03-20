import SolidButton from '@/components/Buttons/SolidButton'

type SubmitButtonWrapperProps = {
    onSubmit: () => void
}
export function SubmitButtonWrapper({ onSubmit }: SubmitButtonWrapperProps) {
    return (
        <div className="col-span-2 mt-[150px] flex justify-end">
            <SolidButton
                text="დავალების შექმნა"
                onClick={onSubmit}
                type="submit"
            />
        </div>
    )
}

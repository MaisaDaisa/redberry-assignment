import { Control } from 'react-hook-form'
import { FormFields } from './index'
import CustomDatePicker from '@/components/DatePicker/CustomDatePicker'

type CustomDatePickerWrapperProps = {
    control: Control<FormFields>
}
export function CustomDatePickerWrapper({
    control,
}: CustomDatePickerWrapperProps) {
    return (
        <div className="w-[330px]">
            <CustomDatePicker name="date" control={control} />
        </div>
    )
}

import { Control } from 'react-hook-form'
import { FormFields } from './index'
import CustomDatePicker from '@/components/DatePicker/CustomDatePicker'

type CustomDatePickerWrapperProps = {
    control: Control<FormFields>
    name: string
}
export function CustomDatePickerWrapper({
    control,
    name,
}: CustomDatePickerWrapperProps) {
    return (
        <div className="w-[330px]">
            <CustomDatePicker name={name} control={control} required />
        </div>
    )
}

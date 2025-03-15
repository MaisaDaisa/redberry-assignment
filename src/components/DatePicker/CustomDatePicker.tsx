import DatePicker from 'react-datepicker'
import { Control, useController } from 'react-hook-form'
import 'react-datepicker/dist/react-datepicker.css'

type CustomDatePickerProps = {
    name: string
    control: Control<any>
}

const CustomDatePicker = ({ name, control }: CustomDatePickerProps) => {
    const {
        field: { value, onChange },
        // fieldState: { error },
    } = useController({
        name,
        control,
        rules: {
            required: 'Date is required',
            validate: (date) =>
                date >= new Date() || 'Cannot select past dates',
        },
    })

    return (
        <div className="flex flex-col">
            <DatePicker
                selected={value}
                onChange={onChange}
                className="rounded border p-2"
            />
        </div>
    )
}

export default CustomDatePicker

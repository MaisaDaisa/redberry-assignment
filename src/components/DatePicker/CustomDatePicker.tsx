import { error } from 'console'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { Controller, useFormContext } from 'react-hook-form'
import 'react-datepicker/dist/react-datepicker.css'

type CustomDatePickerProps = {
    name: string
    placeHolder: string
}

const CustomDatePicker = ({ name, placeHolder }: CustomDatePickerProps) => {
    const {
        control,
        // formState: { errors, dirtyFields },
    } = useFormContext()

    const [startDate, setStartDate] = useState<Date | null>(new Date())
    return (
        <div>
            <Controller
                control={control}
                name={name}
                rules={{
                    required: 'This field is required',
                }}
                render={({ field }) => (
                    <DatePicker
                        name={name}
                        selected={startDate}
                        onChange={(date) => setStartDate(date as Date | null)}
                    />
                )}
            />
        </div>
    )
}

export default CustomDatePicker

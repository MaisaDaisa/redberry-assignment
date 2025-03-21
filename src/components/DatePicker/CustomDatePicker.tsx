import DatePicker from 'react-datepicker'
import { Control, useController } from 'react-hook-form'
import 'react-datepicker/dist/react-datepicker.css'
import TitleH4Component from '../../layouts/TitleH4Component'
import './datepicker.css'
import { useRef, useState } from 'react'
import { WeeksEnglish } from '@/enums/dateEnums'
import { months } from '@/utils/months'

type CustomDatePickerProps = {
    name: string
    control: Control<any>
    required?: boolean
}

const CustomDatePicker = ({
    name,
    control,
    required = false,
}: CustomDatePickerProps) => {
    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
        rules: {
            required: 'Date is required',
            validate: {
                validDate: (date) =>
                    !isNaN(Date.parse(date)) || 'Invalid date format',
                noPast: (date) =>
                    date >= new Date() || 'Cannot select past dates',
            },
        },
    })

    const datePickerRef = useRef<DatePicker | null>(null)
    const [viewingMonth, setViewingMonth] = useState(new Date())

    const handleClickOutside = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(false) // Close date picker
        }
    }

    const Today = new Date()

    return (
        <TitleH4Component title="დედლაინი" required={required}>
            <DatePicker
                //ref
                ref={datePickerRef}
                // Classes
                calendarClassName="datePicker-calendar-custom"
                calendarIconClassName="mr-[6px] cursor-pointer"
                wrapperClassName={
                    !!error ? 'datePickerError' : 'datePickCustom'
                }
                placeholderText="DD/MM/YYYY"
                // Custom Elements
                renderCustomHeader={({
                    date,
                    // changeYear,
                    // changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    // prevMonthButtonDisabled,
                    // nextMonthButtonDisabled,
                }) => {
                    return (
                        <div className="mb-6 flex items-center justify-between">
                            <p className="text-[13px] font-bold text-black">
                                {months[date.getMonth()]} {date.getFullYear()}
                            </p>
                            <div className="flex gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    onClick={increaseMonth}
                                    // disabled={prevMonthButtonDisabled}
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.375 3.6413L2.08333 11.25L1.25 10.3804L10 1.25L18.75 10.3804L17.9167 11.25L10.625 3.6413V20H9.375V3.6413Z"
                                        fill="black"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className="rotate-180"
                                    onClick={decreaseMonth}
                                    // disabled={prevMonthButtonDisabled}
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.375 3.6413L2.08333 11.25L1.25 10.3804L10 1.25L18.75 10.3804L17.9167 11.25L10.625 3.6413V20H9.375V3.6413Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                        </div>
                    )
                }}
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                    >
                        <path
                            d="M5.00065 0.164062V1.4974H9.00065V0.164062H10.334V1.4974H13.0007C13.3689 1.4974 13.6673 1.79588 13.6673 2.16406V12.8307C13.6673 13.1989 13.3689 13.4974 13.0007 13.4974H1.00065C0.632464 13.4974 0.333984 13.1989 0.333984 12.8307V2.16406C0.333984 1.79588 0.632464 1.4974 1.00065 1.4974H3.66732V0.164062H5.00065ZM12.334 6.83073H1.66732V12.1641H12.334V6.83073ZM3.66732 2.83073H1.66732V5.4974H12.334V2.83073H10.334V4.16406H9.00065V2.83073H5.00065V4.16406H3.66732V2.83073Z"
                            fill="#4D596A"
                        />
                    </svg>
                }
                children={
                    <div className="text-purple-accent flex justify-between px-4 text-[13px]">
                        <p
                            className="cursor-pointer"
                            onClick={handleClickOutside}
                        >
                            Cancel
                        </p>
                        <p
                            className="cursor-pointer"
                            onClick={handleClickOutside}
                        >
                            OK
                        </p>
                    </div>
                }
                customInput={
                    <input
                        placeholder="DD/MM/YYYY"
                        type="text"
                        className="w-full indent-[6px] text-sm font-light focus:outline-none"
                    />
                }
                // Toggles
                showIcon
                showPopperArrow={false}
                toggleCalendarOnIconClick
                //Position
                popperPlacement="bottom"
                // Date Manipulation
                formatWeekDay={(date) => {
                    // @ts-ignore - მაინ არ იძლევა სვას
                    return WeeksEnglish[date]
                }}
                onMonthChange={(date) => setViewingMonth(date)}
                dayClassName={(date: Date) =>
                    date.getMonth() === viewingMonth.getMonth()
                        ? ''
                        : 'not-same-month'
                }
                startDate={Today}
                minDate={Today}
                dateFormat="dd/MM/yyyy"
                selected={field.value}
                onChange={field.onChange}
            />
        </TitleH4Component>
    )
}

export default CustomDatePicker

import { Control, useController } from 'react-hook-form'
import TitleH4Component from './TitleH4Component'
import InputErrorMessage, { InputErrorMessagesTypes } from './InputErrorMessage'
import InputTextDesign from '@/components/Inputs/InputTextDesign'

type InputFieldProps = {
    control: Control<any>
    name: string
    title: string
    required?: boolean
    placeholder?: string
    minNum?: number
    minMessage?: string
    maxNum?: number
    maxMessage?: string
    type: 'textarea' | 'text'
}

const InputField = ({
    control,
    type = 'text',
    name,
    title,
    required = false,
    minNum = 2,
    minMessage = 'მინიმუმ 2 სიმბოლო',
    maxNum = 255,
    maxMessage = 'მაქსიმუმ 255 სიმბოლო',
    placeholder = '',
}: InputFieldProps) => {
    const {
        field,
        fieldState: { error, isDirty },
    } = useController({
        name,
        control,
        rules: {
            required: required ? 'This field is required' : false, // ✅ Fix required
            pattern: {
                value: /^[A-Za-z\u10A0-\u10FF]+$/,
                message: 'Only letters are allowed.',
            },
            minLength: {
                value: minNum,
                message: minMessage,
            },
            maxLength: {
                value: maxNum,
                message: maxMessage,
            },
        },
    })

    return (
        <TitleH4Component title={title} required={required}>
            <InputTextDesign
                error={!!error}
                field={field}
                placeholder={placeholder}
                type={type}
            />
            <div className="mt-[6px] flex flex-col items-start gap-[2px]">
                <InputErrorMessage
                    validationType={
                        !isDirty
                            ? InputErrorMessagesTypes.default
                            : error?.type === 'minLength' ||
                                error?.type === 'required'
                              ? InputErrorMessagesTypes.invalid
                              : InputErrorMessagesTypes.valid
                    }
                    message={minMessage}
                />

                <InputErrorMessage
                    validationType={
                        !isDirty
                            ? InputErrorMessagesTypes.default
                            : error?.type === 'maxLength'
                              ? InputErrorMessagesTypes.invalid
                              : InputErrorMessagesTypes.valid
                    }
                    message={maxMessage}
                />
            </div>
        </TitleH4Component>
    )
}

export default InputField

import { Control, useController } from 'react-hook-form'
import TitleH4Component from './TitleH4Component'
import InputErrorMessage, { InputErrorMessagesTypes } from './InputErrorMessage'

type InputFieldProps = {
    control: Control<any>
    name: string
    title: string
    required?: boolean
    placeholder?: string
    customStyles?: string
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
    customStyles = '',
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

    console.log(field)

    console.log(error?.type)

    return (
        <TitleH4Component title={title} required={required}>
            {type === 'text' ? (
                <input
                    {...field}
                    type="text"
                    placeholder={placeholder}
                    className={`w-full min-w-[400px] rounded-[5px] border bg-white p-[14px] text-sm font-light focus:outline-none ${error ? 'border-high-priority' : 'border-gray-shade-10'} ${customStyles}`}
                />
            ) : (
                <textarea
                    {...field}
                    placeholder={placeholder}
                    className={`h-[105px] w-full min-w-[400px] resize-none rounded-[5px] border bg-white p-[14px] text-sm font-light focus:outline-none ${error ? 'border-high-priority' : 'border-gray-shade-10'} ${customStyles}`}
                />
            )}

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

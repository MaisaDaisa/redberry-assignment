import { Control, useController } from 'react-hook-form'
import TitleH4Component from '../../layouts/TitleH4Component'
import InputErrorMessage, { InputErrorMessagesTypes } from './InputErrorMessage'
import InputTextDesign from './InputTextDesign'

type InputFieldProps = {
    control: Control<any>
    name: string
    title: string
    possibleErrors: { type: string; message: string }[]
    required?: boolean
    placeholder?: string
    type?: 'textarea' | 'text'
    h4CustomClasses?: string
}

const InputField = ({
    control,
    type = 'text',
    name,
    title,
    possibleErrors,
    required = false,
    placeholder = '',
    h4CustomClasses = '',
}: InputFieldProps) => {
    // console.log(possibleErrors)
    const {
        field,
        fieldState: { error, isDirty },
    } = useController({
        name,
        control,
    })

    return (
        <TitleH4Component
            title={title}
            required={required}
            h4CustomClasses={h4CustomClasses}
        >
            <InputTextDesign
                error={!!error}
                field={field}
                placeholder={placeholder}
                type={type}
            />
            <div className="mt-[6px] flex flex-col items-start gap-[2px]">
                {possibleErrors &&
                    possibleErrors.map((errorProp) => (
                        <InputErrorMessage
                            validationType={
                                !isDirty
                                    ? InputErrorMessagesTypes.default
                                    : error?.type === errorProp.type ||
                                        error?.type === 'required'
                                      ? InputErrorMessagesTypes.invalid
                                      : InputErrorMessagesTypes.valid
                            }
                            message={errorProp.message}
                        />
                    ))}
            </div>
        </TitleH4Component>
    )
}

export default InputField

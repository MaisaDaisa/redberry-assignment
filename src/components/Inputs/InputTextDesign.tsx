import { ControllerRenderProps, FieldError } from 'react-hook-form'
import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type inputTextDesignProps = {
    placeholder?: string
    field?: ControllerRenderProps<any, string>
    error?: FieldError | undefined
    type: 'textarea' | 'text'
    customStyles?: string
    value?: string
    readOnly?: boolean
}

const InputTextDesign = ({
    placeholder = '',
    field,
    error,
    type,
    customStyles = '',
    value,
    readOnly = false,
}: inputTextDesignProps) => {
    return (
        <>
            {type === 'text' ? (
                <input
                    readOnly={readOnly}
                    value={value}
                    {...field}
                    placeholder={placeholder}
                    className={`w-full min-w-[400px] rounded-[5px] border bg-white p-[14px] text-sm font-light focus:outline-none ${error ? 'border-high-priority' : 'border-gray-shade-10'} ${customStyles}`}
                />
            ) : (
                <textarea
                    value={value}
                    {...field}
                    placeholder={placeholder}
                    className={`w-full min-w-[400px] rounded-[5px] border bg-white p-[14px] text-sm font-light focus:outline-none ${error ? 'border-high-priority' : 'border-gray-shade-10'} h-[105px] resize-none ${customStyles}`}
                />
            )}
        </>
    )
}

export default InputTextDesign

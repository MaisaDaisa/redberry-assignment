import { ControllerRenderProps, FieldError } from 'react-hook-form'

type inputTextDesignProps = {
    placeholder?: string
    field?: ControllerRenderProps<any, string>
    error?: FieldError | undefined
    type: 'textarea' | 'text'
    customStyles?: string
    value?: string
}

const InputTextDesign = ({
    placeholder = '',
    field,
    error,
    type,
    customStyles = '',
    value,
}: inputTextDesignProps) => {
    return (
        <input
            value={value}
            {...field}
            type={type}
            placeholder={placeholder}
            className={`w-full min-w-[400px] rounded-[5px] border bg-white p-[14px] text-sm font-light focus:outline-none ${error ? 'border-high-priority' : 'border-gray-shade-10'} ${type == 'textarea' ? 'h-[105px] resize-none' : ''} ${customStyles}`}
        />
    )
}

export default InputTextDesign

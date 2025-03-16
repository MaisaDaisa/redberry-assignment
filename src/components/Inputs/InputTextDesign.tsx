import { ControllerRenderProps } from 'react-hook-form'

type inputTextDesignProps = {
    placeholder?: string
    field?: ControllerRenderProps<any, string>
    error?: boolean
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
                    className={`w-full rounded-[5px] border bg-white p-[14px] text-sm font-light focus:outline-none ${error ? 'border-high-priority' : 'border-gray-shade-10'} ${customStyles}`}
                />
            ) : (
                <textarea
                    value={value}
                    {...field}
                    placeholder={placeholder}
                    className={`w-full rounded-[5px] border bg-white p-[14px] text-sm font-light focus:outline-none ${error ? 'border-high-priority' : 'border-gray-shade-10'} h-[105px] resize-none ${customStyles}`}
                />
            )}
        </>
    )
}

export default InputTextDesign

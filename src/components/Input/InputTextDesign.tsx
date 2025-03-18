import { ControllerRenderProps } from 'react-hook-form'

type inputTextDesignProps = {
    placeholder?: string
    field?: ControllerRenderProps<any, string>
    error?: boolean
    type: 'textarea' | 'text'
    customInputStyles?: string
    value?: string
    readOnly?: boolean
    borderOn?: boolean
    customDivClass?: string
}

const InputTextDesign = ({
    placeholder = '',
    field,
    error,
    type,
    customInputStyles = '',
    value,
    readOnly = false,
    borderOn = true,
    customDivClass = '',
}: inputTextDesignProps) => {
    const BothStyles = 'w-full focus:outline-none'
    return (
        <div
            className={`w-full rounded-[5px] bg-white text-sm font-light ${'p-[14px] ' + customDivClass} ${borderOn ? 'border ' + (error ? 'border-high-priority' : 'border-gray-shade-10') : ''}`}
        >
            {type === 'text' ? (
                <input
                    readOnly={readOnly}
                    value={value}
                    {...field}
                    placeholder={placeholder}
                    className={`${BothStyles} ${customInputStyles}`}
                />
            ) : (
                <textarea
                    value={value}
                    {...field}
                    placeholder={placeholder}
                    className={`no-scrollbar h-[105px] resize-none ${BothStyles} ${customInputStyles}`}
                />
            )}
        </div>
    )
}

export default InputTextDesign

import { useForm } from 'react-hook-form'

export const useFormHook = () => {
    const methods = useForm({
        mode: 'onBlur', // Validate on blur
        defaultValues: {
            email: '',
            password: '',
        },
    })

    return methods
}

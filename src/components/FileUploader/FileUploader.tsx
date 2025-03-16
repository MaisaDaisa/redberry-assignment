import TitleH4Component from '@/layouts/TitleH4Component'
import { useState, useRef, useCallback } from 'react'
import trashCan from '@/assets/imgs/trashCan.svg'
import { Control, useController } from 'react-hook-form'
import { fileTooLarge } from '@/utils/fileTooLarge'

interface FileUploaderProps {
    control: Control<any>
    title: string
    customStyles?: string
    required: boolean
    h4CustomClasses: string
    name: string
}

const FileUploader = ({
    control,
    name,
    title = '',
    customStyles = '',
    required = false,
    h4CustomClasses = '',
}: FileUploaderProps) => {
    // State for the preview of the image
    const {
        field,
        fieldState: { error, isDirty },
    } = useController({
        name,
        control,
        rules: {
            required: required ? 'This field is required' : false,
            validate: {
                fileSize: fileTooLarge,
            },
        },
    })
    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null)
    // Ref for the input element
    const inputRef = useRef<HTMLInputElement | null>(null)

    // Function to handle the drag over div Element
    const handleDragOver = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault()
        },
        []
    )

    // Function to handle the drop event on the div element
    const handleDrop = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault()
            const file = event.dataTransfer.files[0]

            if (file && file.type.startsWith('image/')) {
                if (!fileTooLarge(file)) {
                    const reader = new FileReader()
                    reader.onload = () => {
                        setPreview(reader.result)
                    }
                    reader.readAsDataURL(file)
                    // Use field.onChange instead of setting field.value directly
                    field.onChange([file])
                }
            } else {
                console.error('The dropped file is not an image.')
            }
        },
        [field]
    )

    // Function to upload the file

    const uploadFile = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files ? event.target.files[0] : null
            console.log(file)
            if (file && !fileTooLarge(file)) {
                field.onChange(event.target.value)
                const reader = new FileReader()
                reader.onload = () => {
                    setPreview(reader.result)
                }
                reader.readAsDataURL(file)
            } else {
                // setDropRejected(true)
            }
        },
        []
    )

    const handleDelete = useCallback(() => {
        setPreview(null)
        field.value = ''
    }, [])

    return (
        <TitleH4Component
            h4CustomClasses={h4CustomClasses}
            title={title}
            customStyles={customStyles}
            required={required}
        >
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => inputRef.current?.click()}
                className={`group flex h-[120px] items-center justify-center border border-dashed ${
                    !error ? 'border-gray-shades-15' : 'border-high-priority'
                } w-full rounded-lg select-none ${
                    preview ? 'cursor-default' : 'cursor-pointer'
                }`}
                aria-label="File upload area"
                role="button"
            >
                <input
                    {...field}
                    type="file"
                    disabled={!!preview}
                    hidden
                    onChange={(event) => {
                        uploadFile(event)
                    }}
                    accept="image/png, image/jpeg"
                    ref={inputRef}
                />
                {preview ? (
                    <div className="relative flex flex-col items-end justify-end">
                        <img
                            src={preview as string}
                            alt="preview"
                            className="h-[82px] w-[96px] rounded-full object-cover"
                        />
                        <div className="border-gray-shade-validation absolute flex h-6 w-6 translate-x-[3px] translate-y-[3px] cursor-pointer items-center justify-center rounded-full border-[0.3px] bg-white transition-transform hover:scale-110">
                            <img
                                src={trashCan}
                                alt="delete"
                                width={14}
                                height={14}
                                onClick={handleDelete}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={`h-[24px] w-[24px] scale-100 transition-transform group-hover:scale-125`}
                        >
                            <path
                                d="M9 10.75C7.48 10.75 6.25 9.52 6.25 8C6.25 6.48 7.48 5.25 9 5.25C10.52 5.25 11.75 6.48 11.75 8C11.75 9.52 10.52 10.75 9 10.75ZM9 6.75C8.31 6.75 7.75 7.31 7.75 8C7.75 8.69 8.31 9.25 9 9.25C9.69 9.25 10.25 8.69 10.25 8C10.25 7.31 9.69 6.75 9 6.75Z"
                                fill="#343A40"
                            />
                            <path
                                d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H13C13.41 1.25 13.75 1.59 13.75 2C13.75 2.41 13.41 2.75 13 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"
                                fill="#343A40"
                            />
                            <path
                                d="M18 8.74994C17.59 8.74994 17.25 8.40994 17.25 7.99994V1.99994C17.25 1.69994 17.43 1.41994 17.71 1.30994C17.99 1.19994 18.31 1.25994 18.53 1.46994L20.53 3.46994C20.82 3.75994 20.82 4.23994 20.53 4.52994C20.24 4.81994 19.76 4.81994 19.47 4.52994L18.75 3.80994V7.99994C18.75 8.40994 18.41 8.74994 18 8.74994Z"
                                fill="#343A40"
                            />
                            <path
                                d="M16.0004 4.74994C15.8104 4.74994 15.6204 4.67994 15.4704 4.52994C15.1804 4.23994 15.1804 3.75994 15.4704 3.46994L17.4704 1.46994C17.7604 1.17994 18.2404 1.17994 18.5304 1.46994C18.8204 1.75994 18.8204 2.23994 18.5304 2.52994L16.5304 4.52994C16.3804 4.67994 16.1904 4.74994 16.0004 4.74994Z"
                                fill="#343A40"
                            />
                            <path
                                d="M2.67029 19.7001C2.43029 19.7001 2.19029 19.5801 2.05029 19.3701C1.82029 19.0301 1.91029 18.5601 2.25029 18.3301L7.18029 15.0201C8.26029 14.3001 9.75029 14.3801 10.7303 15.2101L11.0603 15.5001C11.5603 15.9301 12.4103 15.9301 12.9003 15.5001L17.0603 11.9301C18.1203 11.0201 19.7903 11.0201 20.8603 11.9301L22.4903 13.3301C22.8003 13.6001 22.8403 14.0701 22.5703 14.3901C22.3003 14.7001 21.8203 14.7401 21.5103 14.4701L19.8803 13.0701C19.3803 12.6401 18.5403 12.6401 18.0403 13.0701L13.8803 16.6401C12.8203 17.5501 11.1503 17.5501 10.0803 16.6401L9.75029 16.3501C9.29029 15.9601 8.53029 15.9201 8.02029 16.2701L3.10029 19.5801C2.96029 19.6601 2.81029 19.7001 2.67029 19.7001Z"
                                fill="#343A40"
                            />
                        </svg>
                        <p className="text-sm">ატვირთე ფოტო</p>
                    </div>
                )}
            </div>

            <div>
                <p
                    className={`main-text-sm-100-400 !text-invalid-red mt-2 ${
                        !error ? 'invisible' : ''
                    }`}
                >
                    Please input an image file under 1MB
                </p>
            </div>
        </TitleH4Component>
    )
}

export default FileUploader

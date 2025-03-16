import { ReactNode } from 'react'

interface TitleH4ComponentProps {
    title: string
    required?: boolean
    children?: ReactNode
    customStyles?: string
    h4CustomClasses?: string
}

const TitleH4Component = ({
    title,
    required = false,
    children,
    customStyles = '',
    h4CustomClasses = '',
}: TitleH4ComponentProps) => {
    return (
        <div
            className={`flex flex-col items-start justify-start ${customStyles}`}
        >
            <h4 className={`flex gap-[-2px] py-[6px] ${h4CustomClasses}`}>
                {title} {required ? <span>*</span> : ''}
            </h4>
            {children}
        </div>
    )
}

export default TitleH4Component

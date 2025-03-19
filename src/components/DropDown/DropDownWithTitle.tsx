import TitleH4Component from '@/layouts/TitleH4Component'
import DropDown, { DropDownProps } from './DropDown'

type DropDownWithTitle = {
    required?: boolean
    title: string
    h4CustomClasses?: string
    dropDownProps: DropDownProps
}

const DropDownWithTitle = ({
    required = false,
    title,
    h4CustomClasses = '',
    dropDownProps,
}: DropDownWithTitle) => {
    return (
        <TitleH4Component
            title={title}
            required={required}
            h4CustomClasses={h4CustomClasses}
        >
            <DropDown {...dropDownProps} />
        </TitleH4Component>
    )
}

export default DropDownWithTitle

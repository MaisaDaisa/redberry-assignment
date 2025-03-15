import DropDown from './DropDown'
import { Control } from 'react-hook-form'

type DropDownWrapperProps = {
    control: Control<any>
    test: any
}

const DropDownWrapper = ({ control, test }: DropDownWrapperProps) => {
    return (
        <div className="grid grid-cols-2 gap-8">
            <DropDown
                control={control}
                name="priority"
                key={'titleDropDown'}
                title="პრიორიტეტი"
                required
                items={test}
            />
            <DropDown
                control={control}
                name="status"
                title="სტატუსი"
                key={'statusDropDown'}
                required
                items={test}
            />
        </div>
    )
}

export default DropDownWrapper

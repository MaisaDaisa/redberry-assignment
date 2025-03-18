import { prioritySchema, statusSchema } from '@/api/apiSchemas'
import DropDown from '@/components/DropDown/DropDown'
import DropDownPriority from '@/components/DropDown/DropDownPriority'
import { Control } from 'react-hook-form'

type DropDownWrapperProps = {
    control: Control<any>
    data: {
        priorities: prioritySchema[]
        statuses: statusSchema[]
    }
}

const DropDownWrapper = ({ control, data }: DropDownWrapperProps) => {
    return (
        <div className="grid grid-cols-2 gap-8">
            <DropDown
                control={control}
                name="priority"
                key={'titleDropDown'}
                title="პრიორიტეტი"
                required
                items={data.priorities}
                renderItem={(item: prioritySchema, onClick) => (
                    <DropDownPriority
                        iconUrl={item.icon}
                        text={item.name}
                        onClick={onClick}
                    />
                )}
            />
            <DropDown
                control={control}
                name="status"
                title="სტატუსი"
                key={'statusDropDown'}
                required
                items={data.statuses}
            />
        </div>
    )
}

export default DropDownWrapper

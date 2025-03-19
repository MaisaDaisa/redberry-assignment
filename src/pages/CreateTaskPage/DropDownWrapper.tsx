import { prioritySchema, statusSchema } from '@/api/apiSchemas'
import DropDownPriority from '@/components/DropDown/DropDownPriority'
import DropDownWithTitle from '@/components/DropDown/DropDownWithTitle'
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
            <DropDownWithTitle
                key={'titleDropDown'}
                title="პრიორიტეტი"
                required
                dropDownProps={{
                    items: data.priorities,
                    name: 'priority_id',
                    control: control,
                    renderItem: (item: prioritySchema, onClick) => (
                        <DropDownPriority
                            iconUrl={item.icon}
                            text={item.name}
                            onClick={onClick}
                        />
                    ),
                }}
            />
            <DropDownWithTitle
                title="სტატუსი"
                required
                key={'statusDropDown'}
                dropDownProps={{
                    control: control,
                    name: 'status_id',
                    items: data.statuses,
                }}
            />
        </div>
    )
}

export default DropDownWrapper

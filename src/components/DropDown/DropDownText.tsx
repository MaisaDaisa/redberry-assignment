import DropDownChoiceWrapper from './DropDownChoiceWrapper'

type DropDownTextProps = {
    text: string
    onClick: () => void
}

const DropDownText = ({ onClick, text }: DropDownTextProps) => {
    return (
        <DropDownChoiceWrapper onClick={onClick}>{text}</DropDownChoiceWrapper>
    )
}

export default DropDownText

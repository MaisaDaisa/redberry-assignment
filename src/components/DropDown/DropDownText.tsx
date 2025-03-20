import DropDownChoiceWrapper from './DropDownChoiceWrapper'

type DropDownTextProps = {
    text: string
    onClick: () => void
    noHover?: boolean
}

const DropDownText = ({
    onClick,
    text,
    noHover = false,
}: DropDownTextProps) => {
    return (
        <DropDownChoiceWrapper noHover={noHover} onClick={onClick}>
            {text}
        </DropDownChoiceWrapper>
    )
}

export default DropDownText

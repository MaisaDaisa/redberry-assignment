import CheckBoxWrapper, { CheckBoxWrapperProps } from './CheckBoxWrapper'

type CheckBoxWithTextProps = CheckBoxWrapperProps & {
    text: string
}

const CheckBoxWithText = ({
    isChecked = false,
    text,
    onClickHandler,
}: CheckBoxWithTextProps) => {
    return (
        <CheckBoxWrapper isChecked={isChecked} onClickHandler={onClickHandler}>
            <p className="">{text}</p>
        </CheckBoxWrapper>
    )
}

export default CheckBoxWithText

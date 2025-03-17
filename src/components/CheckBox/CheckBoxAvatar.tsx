import CheckBoxWrapper, { CheckBoxWrapperProps } from './CheckBoxWrapper'

type CheckBoxAvatarProps = CheckBoxWrapperProps & {}

const CheckBoxAvatar = ({ isChecked, onClickHandler }: CheckBoxAvatarProps) => {
    return (
        <CheckBoxWrapper isChecked={isChecked} onClickHandler={onClickHandler}>
            <div></div>
        </CheckBoxWrapper>
    )
}

export default CheckBoxAvatar

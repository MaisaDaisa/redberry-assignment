import AvatarWithTextInline, {
    AvatarWithTextInlineProps,
} from '../AvatarWithTextInline'
import CheckBoxWrapper, { CheckBoxWrapperProps } from './CheckBoxWrapper'

type CheckBoxAvatarProps = CheckBoxWrapperProps & AvatarWithTextInlineProps

const CheckBoxAvatar = ({
    isChecked,
    onClickHandler,
    avatarUrl,
    name,
}: CheckBoxAvatarProps) => {
    return (
        <CheckBoxWrapper isChecked={isChecked} onClickHandler={onClickHandler}>
            <AvatarWithTextInline avatarUrl={avatarUrl} name={name} />
        </CheckBoxWrapper>
    )
}

export default CheckBoxAvatar

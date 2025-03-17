export type AvatarWithTextInlineProps = {
    avatarUrl: string
    name: string
}

const AvatarWithTextInline = ({
    name,
    avatarUrl,
}: AvatarWithTextInlineProps) => {
    return (
        <div>
            <img src={avatarUrl} alt="" className="h-7 w-7" />
            <p className="text-sm font-light">{name}</p>
        </div>
    )
}

export default AvatarWithTextInline

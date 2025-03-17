export type AvatarWithTextInlineProps = {
    avatarUrl: string
    name: string
}

const AvatarWithTextInline = ({
    name,
    avatarUrl,
}: AvatarWithTextInlineProps) => {
    return (
        <div className="flex flex-row items-center gap-[6px]">
            <img
                src={avatarUrl}
                alt={name}
                className="h-7 w-7 rounded-full object-cover object-center"
            />
            <p className="text-sm font-light">{name}</p>
        </div>
    )
}

export default AvatarWithTextInline

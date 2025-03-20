export type AvatarWithTextInlineProps = {
    avatarUrl: string
    name: string
    customImgClasses?: string
    customTextClasses?: string
}

const AvatarWithTextInline = ({
    name,
    avatarUrl,
    customImgClasses = '',
    customTextClasses = 'text-sm font-light',
}: AvatarWithTextInlineProps) => {
    return (
        <div className="flex flex-row items-center gap-[6px]">
            <img
                src={avatarUrl}
                alt={name}
                className={`h-7 w-7 rounded-full object-cover object-center ${customImgClasses}`}
            />
            <p className={`${customTextClasses}`}>{name}</p>
        </div>
    )
}

export default AvatarWithTextInline

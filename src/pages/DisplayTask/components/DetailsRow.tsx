import React from 'react'

type DetailsRowProps = {
    children: React.ReactNode
    text: string
    imgUrl: string
}
const DetailsRow = ({ children, imgUrl, text }: DetailsRowProps) => {
    return (
        <div className="grid grid-cols-[170px_auto] items-center gap-[70px] py-[10px]">
            <div className="flex h-[50px] items-center gap-[6px]">
                <img src={imgUrl} className="h-6 w-6 shrink-0" alt="" />
                <p className="text-gray-small">{text}</p>
            </div>
            {children}
        </div>
    )
}

export default DetailsRow

import RoundButton from '@/components/Buttons/RoundButton'
import InputTextDesign from '@/components/Input/InputTextDesign'
import React from 'react'

export function CommentTextArea({}) {
    return (
        <div className="relative">
            <InputTextDesign
                type="textarea"
                placeholder="დაწერე კომენტარი"
                customDivClass="rounded-[10px] px-5 pt-[18px] pb-[15px] font-book"
            />
            <RoundButton
                text="დააკომენტარე"
                onClickHandler={() => {}}
                customClass="bottom-[15px] absolute right-5"
            />
        </div>
    )
}

export default CommentTextArea

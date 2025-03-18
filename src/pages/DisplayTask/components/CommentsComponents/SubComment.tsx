import React from 'react'
export function SubComment({}) {
    return (
        <div className="flex gap-3">
            <img
                src="https://picsum.photos/200"
                alt=""
                className="h-[38px] w-[38px] rounded-full object-contain"
            />
            <div>
                <h4 className="text-[18px] font-semibold">ემილია მორგანი</h4>
                <p className="font-book mt-2 text-[18px]">
                    დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი
                    იქნება, რომ ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.
                </p>
            </div>
        </div>
    )
}

export default SubComment

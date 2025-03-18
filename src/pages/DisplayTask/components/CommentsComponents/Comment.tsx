import SubComment from './SubComment'
import React from 'react'

export function Comment({}) {
    return (
        <div className="flex gap-3">
            <img
                src="https://picsum.photos/200"
                alt=""
                className="h-[38px] w-[38px] rounded-full object-contain"
            />

            <div className="flex flex-col">
                <div className="flex flex-col">
                    <h4 className="text-[18px] font-semibold">
                        ემილია მორგანი
                    </h4>
                    <p className="font-book mt-2 text-[18px]">
                        დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი
                        იქნება, რომ ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.
                    </p>
                    <div className="mt-[10px] flex cursor-pointer gap-[6px] py-[6px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_46392_1673)">
                                <path
                                    d="M16.0007 13.9993H14.6673V11.9993C14.6673 8.66602 12.0007 5.99935 8.66732 5.99935H5.33398V4.66602H8.66732C12.734 4.66602 16.0007 7.93268 16.0007 11.9993V13.9993Z"
                                    fill="#8338EC"
                                />
                                <path
                                    d="M2 5.33333L5.33333 8.66667V2L2 5.33333Z"
                                    fill="#8338EC"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_46392_1673">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-purple-accent text-[12px]">
                            უპასუხე
                        </p>
                    </div>
                </div>
                <div className="mt-5 mb-[52px] flex flex-col gap-5">
                    <SubComment />
                    <SubComment />
                    <SubComment />
                    <SubComment />
                    <SubComment />
                </div>
            </div>
        </div>
    )
}

export default Comment

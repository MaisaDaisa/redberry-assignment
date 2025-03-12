import React from 'react'
import HourGlass from '@/assets/imgs/Hourglass.svg'

type Props = {
    children: React.ReactNode
}

const NavBar = ({ children }: Props) => {
    return (
        <div className="flex flex-row items-center justify-between px-(--global-padding) py-[31px]">
            <div className="flex flex-row">
                <h3 className="text-purple-accent font-Fredoka-One text-[31px]">
                    Momentum
                </h3>
                <img src={HourGlass} alt="" />
            </div>
            <div className="flex flex-row gap-10">{children}</div>
        </div>
    )
}

export default NavBar

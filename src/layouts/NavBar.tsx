import HourGlass from '@/assets/imgs/Hourglass.svg'
import { Link, useNavigate } from 'react-router'

type Props = {
    children: React.ReactNode
}

const NavBar = ({ children }: Props) => {
    return (
        <div className="flex flex-row items-center justify-between px-(--global-padding) py-[31px]">
            <Link className="flex flex-row" to={{ pathname: '/' }}>
                <h3 className="text-purple-accent font-Fredoka-One text-[31px]">
                    Momentum
                </h3>
                <img src={HourGlass} alt="" />
            </Link>
            <div className="flex flex-row gap-10">{children}</div>
        </div>
    )
}

export default NavBar

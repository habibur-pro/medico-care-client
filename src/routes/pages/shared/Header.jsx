import { NavLink, useLocation } from "react-router-dom";


const Header = () => {
    const { pathname } = useLocation()

    return (
        <nav className={`${pathname === '/' ? 'bg-trnsparent' : 'bg-primary'} `}>
            <div className="max-w-[1240px] mx-auto  md:flex justify-between items-center py-4">
                <h3 className="text-3xl font-bold">Medico<span className="font-semibold">Care</span></h3>
                <ul className="md:flex gap-4">

                    <li><NavLink
                        to='/'
                        className={({ isActive }) => isActive ? 'text-white' : ''}
                    >Home
                    </NavLink>
                    </li>
                    <li><NavLink
                        to='/login'
                        className={({ isActive }) => isActive ? 'text-white' : ''}
                    >Login
                    </NavLink>
                    </li>
                    <li><NavLink
                        to='/register'
                        className={({ isActive }) => isActive ? 'text-white' : ''}
                    >Register
                    </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
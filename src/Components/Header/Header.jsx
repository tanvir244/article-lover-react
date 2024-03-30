import { Link } from "react-router-dom";

const Header = () => {
    const links = <>
        <li className="text-base"><Link to="/">Home</Link></li>
        <li className="text-base"><Link to="/reading_ctivities">Reading Activities</Link></li>
        <li className="text-base"><Link to="/overview ">Overview</Link></li>
        <li className="text-base"><Link to="/famous_quotes">Quotes</Link></li>
    </>


    return (
        <div className="max-w-6xl mx-auto font-dm-serif my-2">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            { links }
                        </ul>
                    </div>
                    <a href="/" className="text-4xl font-bold">Articles</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-base">Subscribe</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
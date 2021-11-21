import {NavLink} from "react-router-dom";
function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/users/1/2">error</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
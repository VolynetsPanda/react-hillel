import {useContext} from "react";
import './style.css';
import Context from "../../context";

function Header() {
    const {count} = useContext(Context)
    return (
        <header>
            <div>
                <p>{count}</p>
            </div>
        </header>
    )
}
export default Header;

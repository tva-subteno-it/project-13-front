import {Link} from "react-router-dom";
import argentBankLogo from "../../assets/argentBankLogo.png"
import {useLocation} from "react-router-dom";

export default function Nav() {
    const location = useLocation();
    return (
        <nav className={"main-nav"}>
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to="/sign-in">
                    <i className="fa fa-user-circle"></i>
                    &nbsp;{location.pathname !== '/transactions' ? "Sign In" : "Tony"}
                </Link>
                &nbsp;
                {location.pathname === '/transactions' && <Link className="main-nav-item" to="/">
                    <i className="fa fa-sign-out"></i>
                    &nbsp;Sign Out
                </Link>}
            </div>
        </nav>
    )
}
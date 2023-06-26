import {Link} from "react-router-dom";
import argentBankLogo from "../../assets/argentBankLogo.png"

export default function Nav() {
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
                    &nbsp;Sign In
                </Link>
            </div>
        </nav>
    )
}
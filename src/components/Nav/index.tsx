import {Link, useNavigate} from "react-router-dom";
import argentBankLogo from "../../assets/argentBankLogo.png"
import {ROUTES} from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import {disconnect} from "../../features/user/userSlice.ts";
import {MouseEvent} from "react";
import {AppDispatch, RootState} from "../../redux/store.ts";

export default function Nav() {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const isConnected = useSelector((state: RootState) => state.user.isConnected)
    const {token, rememberMe, firstName} = useSelector((state: RootState) => state.user)

    const handleDisconnect = (e: MouseEvent<HTMLAnchorElement>, isHomeButton=false) => {
        e.preventDefault();
        if (!isHomeButton || rememberMe !== 'on') {
            dispatch(disconnect());
        }
        navigate(ROUTES.HOME);
    }

    return (
        <nav className={"main-nav"}>
            <Link className="main-nav-logo" to={ROUTES.HOME} onClick={(e)=>handleDisconnect(e, true)}>
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to={isConnected && token || (!isConnected && token && rememberMe) ? ROUTES.TRANSACTIONS :ROUTES.LOGIN}>
                    <i className="fa fa-user-circle"></i>
                    &nbsp;{!isConnected ? "Sign In" : firstName}
                </Link>
                &nbsp;
                {isConnected && <Link className="main-nav-item" to={ROUTES.HOME} onClick={handleDisconnect}>
                    <i className="fa fa-sign-out"></i>
                    &nbsp;Sign Out
                </Link>}
            </div>
        </nav>
    )
}
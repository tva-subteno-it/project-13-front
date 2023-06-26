import {Outlet} from "react-router-dom";

export default function Root() {
    return <>
        <nav>NAV</nav>
        <Outlet/>
    </>
}
import {Outlet} from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";

export default function Root() {
    return <>
        <Nav/>
        <Outlet/>
        <Footer/>
    </>
}
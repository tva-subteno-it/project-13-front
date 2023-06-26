import {Form} from "react-router-dom"
import {useActionData, useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";
import {ROUTES} from "../../constants";

interface DataLoader {
    token?: string;
    message?: string;
    status?: number;
}

export default function SignInForm() {
    const dataLoader = useActionData() as DataLoader
    const navigate = useNavigate()
    const [error, setError] = useState('')
    useEffect(() => {
        if (dataLoader?.token) {
            navigate(ROUTES.TRANSACTIONS)
        } else if (dataLoader?.message) {
            setError(dataLoader.message)
        }
    }, [dataLoader, navigate])

    return <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {error && <p className="error">{error}</p>}
        <Form method={"post"}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name={"email"}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name={"password"}/>
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" name={"remember"}/>
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type={"submit"}>Sign In</button>
        </Form>
    </section>
}
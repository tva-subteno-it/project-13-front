import {Form} from "react-router-dom"

interface Props {
    error: string;
}

export default function SignInForm({error}: Props) {

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
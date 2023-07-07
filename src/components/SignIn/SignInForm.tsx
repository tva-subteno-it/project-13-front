import {FormEvent, useEffect, useState} from "react";
import {signInAction} from "../../features/user/userSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../constants";

export default function SignInForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    const {token} = useSelector((state: RootState) => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            navigate(ROUTES.TRANSACTIONS)
        }
    }, [token])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(signInAction({email, password, rememberMe: remember}))
    }

    return <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form className="sign-in-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name={"email"} value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name={"password"} value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" name={"remember"} checked={remember} onChange={e => setRemember(e.target.checked)}/>
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type={"submit"}>Sign In</button>
        </form>
    </section>
}
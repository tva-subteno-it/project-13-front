import SignInForm from "../../components/SignIn/SignInForm.tsx";
import {useActionData, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {ROUTES} from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import {setJwt} from "../../features/user/userSlice.ts";
import {RootState} from "../../redux/store.ts";

interface DataAction {
    token?: string;
    rememberMe?: 'on';
    message?: string;
    status?: number;
}

export default function SignIn() {
    const dispatch = useDispatch();
    const dataAction = useActionData() as DataAction
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const {jwt, rememberMe} = useSelector((state: RootState) => state.user)

    useEffect(() => {
        if (jwt && rememberMe === 'on') {
            navigate(ROUTES.TRANSACTIONS)
        }
    }, [])

    useEffect(() => {
        if (dataAction?.token) {
            dispatch(setJwt({jwt: dataAction.token, rememberMe: dataAction?.rememberMe}))
            navigate(ROUTES.TRANSACTIONS)
        } else if (dataAction?.message) {
            setError(dataAction.message)
        }
    }, [dataAction, navigate])

    return <main className="main bg-dark">
        <SignInForm error={error}/>
    </main>
}
import SignInForm from "../../components/SignIn/SignInForm.tsx";
import {useActionData, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {ROUTES} from "../../constants";
import {useDispatch} from "react-redux";
import {setJwt} from "../../features/user/userSlice.ts";
import {setIsConnected} from "../../features/root/rootSlice.ts";
import {AppDispatch} from "../../redux/store.ts";

interface DataAction {
    token?: string;
    rememberMe?: 'on';
    message?: string;
    status?: number;
}

export default function SignIn() {
    const dispatch = useDispatch<AppDispatch>();
    const dataAction = useActionData() as DataAction
    const navigate = useNavigate()
    const [error, setError] = useState('')

    useEffect(() => {
        if (dataAction?.token) {
            dispatch(setJwt({jwt: dataAction.token, rememberMe: dataAction?.rememberMe}))
            dispatch(setIsConnected(true))
            navigate(ROUTES.TRANSACTIONS)
        } else if (dataAction?.message) {
            setError(dataAction.message)
        }
    }, [dataAction, navigate])

    return <main className="main bg-dark">
        <SignInForm error={error}/>
    </main>
}
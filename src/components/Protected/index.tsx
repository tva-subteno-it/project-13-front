import {Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store.ts';
import {ROUTES} from "../../constants";
import React, {useEffect, useState} from "react";
import {loginWithToken} from "../../features/user/userSlice.ts";

export default function Protected({children}: {children: React.JSX.Element}){
    const [connecting, setConnecting] = useState(true)
    let {token, isConnected} = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>()
    if (!token){
        token = window.localStorage.getItem("token")
    }

    useEffect(() => {
        if (token && !isConnected){
            console.log("dispatching loginWithToken")
            dispatch(loginWithToken(token))
            setConnecting(true)
        }
    }, [])

    useEffect(() => {
        if (isConnected){
            setConnecting(false)
        }
    }, [isConnected])

    if (connecting && token){
        return <p>Loading...</p>
    }
    if (isConnected) {
        return children
    } else {
        return <Navigate to={ROUTES.LOGIN} />
    }
}
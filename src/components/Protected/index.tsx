import {Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store.ts';
import {ROUTES} from "../../constants";
import React, {useEffect} from "react";
import {loginWithToken} from "../../features/user/userSlice.ts";

export default function Protected({children}: {children: React.JSX.Element}){
    let {token, isLoading, isConnected, isWrongToken} = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>()
    if (!token){
        token = window.localStorage.getItem("token")
    }
    console.log("isConnected", isConnected)
    console.log("isLoading", isLoading)

    useEffect(() => {
        if (token && !isConnected){
            console.log("dispatching loginWithToken")
            dispatch(loginWithToken(token))
        }
    }, [])

    if (isLoading ||(!isConnected && token && !isWrongToken)){
        return <p>Loading...</p>
    }
    if (isConnected) {
        return children
    } else {
        console.log("redirecting to login")
        return <Navigate to={ROUTES.LOGIN} />
    }
}
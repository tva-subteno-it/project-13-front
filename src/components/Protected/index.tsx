import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store.ts';
import {ROUTES} from "../../constants";
import React from "react";

export default function Protected({children}: {children: React.JSX.Element}){
    const {jwt, rememberMe} = useSelector((state: RootState) => state.user)
    const isConnected = useSelector((state: RootState) => state.root.isConnected)

    if (isConnected || (jwt && rememberMe)) {
        return children
    } else {
        return <Navigate to={ROUTES.LOGIN} />
    }
}
import {TRANSACTIONS} from "../../constants";
import Transaction from "../../components/Transaction";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {useNavigate} from "react-router-dom";
import {setIsConnected} from "../../features/root/rootSlice.ts";
import {useEffect} from "react";

export default function Transactions() {
    const {jwt, rememberMe} = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()

    useEffect(() => {
        if (jwt || rememberMe) {
            dispatch(setIsConnected(true));
        }
    }, [jwt, rememberMe, navigate, dispatch])

    return <main className="main bg-dark">
        <div className="header">
            <h1>Welcome back<br/>Tony Jarvis!</h1>
            <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {TRANSACTIONS.map(data => <Transaction {...data} key={data.title}/>)}
    </main>
}

import {ACCOUNTS} from "../../constants";
import Transaction from "../../components/History";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {useNavigate} from "react-router-dom";
import {setIsConnected} from "../../features/root/rootSlice.ts";
import {useEffect} from "react";
import History from "../../components/History/History.tsx";

export default function Transactions() {
    const {jwt, rememberMe} = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()

    useEffect(() => {
        if (jwt || rememberMe) {
            dispatch(setIsConnected(true));
        }
    }, [jwt, rememberMe, navigate, dispatch])

    const params = new URLSearchParams(window.location.search);
    const accountId = params.get("id");
    if (accountId !== null) {
        return <History id={accountId}/>
    }

    return <main className="main bg-dark">
        <div className="header">
            <h1>Welcome back<br/>Tony Jarvis!</h1>
            <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {ACCOUNTS.map(data => <Transaction {...data} key={data.id}/>)}
    </main>
}

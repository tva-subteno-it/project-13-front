import {ROUTES} from "../../constants";
import {HistoryTab} from "../../components/History/HistoryTab.tsx";
import {Balance} from "../../components/History/Balance.tsx";
import {Navigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import useFetch from "../../hooks/useFetch.ts";
import {useEffect, useState} from "react";
import {History as HistoryType, HistoryBody} from "../../@types";
import {getAccounts} from "../../features/accounts/accountSlice.ts";

export default function History() {
    const {id} = useParams()
    const {accounts} = useSelector((state: RootState) => state.accounts);
    const {token} = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>()
    const [history, setHistory] = useState<HistoryType[]>([])
    const {error, isLoading, data} = useFetch<HistoryBody>(
        `http://localhost:3001/api/v1/account/transactions?account_id=${id}`,
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )

    useEffect(() => {
        if (!accounts.length && token){
            dispatch(getAccounts(token))
        }
    }, [accounts, token])

    useEffect(() => {
        if (data) {
            setHistory(data.history)
        }
    }, [data])

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (!id) {
        return <Navigate to={ROUTES.TRANSACTIONS}/>
    }
    const account = accounts.find(account=> account._id === id)
    if (account){
        return <main className="main bg-dark history-main">
            <Balance account={account} historyNumber={history?.length ?? 0}/>
            <section className={"history-section"}>
                <div className={"history-header"}>
                    <h4></h4>
                    <h4>Date</h4>
                    <h4>Description</h4>
                    <h4>Amount</h4>
                    <h4>Balance</h4>
                </div>
                {history?.map((h) => <HistoryTab history={h} key={`${h.date}${h.amount}`}/> )}
            </section>
        </main>
    }
}
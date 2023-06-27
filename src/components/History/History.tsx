import {ACCOUNTS, TRANSACTIONS} from "../../constants";
import {HistoryTab} from "./HistoryTab.tsx";
import {Balance} from "./Balance.tsx";

export default function History({id}: {id:string}) {
    const history = TRANSACTIONS.find(transaction => transaction.parent_id === +id)?.history
    const account = ACCOUNTS.find(account=> account.id === +id)
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
import {TRANSACTIONS} from "../../constants";
import Transaction from "../../components/Transaction";

export default function Transactions() {
    return <main className="main bg-dark">
        <div className="header">
            <h1>Welcome back<br/>Tony Jarvis!</h1>
            <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {TRANSACTIONS.map(data => <Transaction {...data}/>)}
    </main>
}

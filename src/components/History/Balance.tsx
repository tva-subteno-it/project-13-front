import {ACCOUNTS, SYMBOLS} from "../../constants";

export function Balance({account, historyNumber}: {account: typeof ACCOUNTS[0], historyNumber: number}){
    const symbol = SYMBOLS[account.currency];
    return (
        <section className={"balance-section"}>
            <h2>{account.title} {historyNumber && `x${historyNumber}`}</h2>
            <h1>{symbol}{account.balance}</h1>
            <h3>{account.description}</h3>
        </section>
    )
}
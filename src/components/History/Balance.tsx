import {SYMBOLS} from "../../constants";
import {Account} from "../../@types";

export function Balance({account, historyNumber}: {account: Account, historyNumber: number}){
    const symbol = SYMBOLS[account.currency];
    return (
        <section className={"balance-section"}>
            <h2>{account.title} {`x${historyNumber}`}</h2>
            <h1>{symbol}{account.balance}</h1>
            <h3>{account.description}</h3>
        </section>
    )
}
import {SYMBOLS} from "../../constants";

interface TransactionProps {
    title: string,
    number_of_transactions: number,
    balance: number,
    currency: string,
    description: string,
}

export default function Transaction({ title, number_of_transactions, balance, currency, description }: TransactionProps) {
    const symbol = SYMBOLS[currency];
    return <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{title} (x{number_of_transactions})</h3>
            <p className="account-amount">{symbol}{balance.toLocaleString("fr-FR")}</p>
            <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
        </div>
    </section>
}
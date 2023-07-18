import {ROUTES, SYMBOLS} from "../../constants";
import {Account} from "../../@types";
import {Link} from "react-router-dom";

export default function Transaction({ title, number_of_transactions, balance, currency, description, _id }: Account) {
    const symbol = SYMBOLS[currency];
    return <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{title} (x{number_of_transactions})</h3>
            <p className="account-amount">{symbol}{balance.toLocaleString("fr-FR")}</p>
            <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
            <Link className="transaction-button" to={`${ROUTES.TRANSACTIONS}/${_id}`}>View transactions</Link>
        </div>
    </section>
}
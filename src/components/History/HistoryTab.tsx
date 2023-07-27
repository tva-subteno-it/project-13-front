import {History} from "../../@types";
import {SYMBOLS} from "../../constants";
import {formatDate} from "../../utils/formatDate.ts";
import {useState} from "react";
import {ExpandedHistory} from "./ExpandedHistory.tsx";


export function HistoryTab({history, index}: {history : History, index: number}){
    const symbol = SYMBOLS[history.currency];
    const date = formatDate(history.date)
    const [isExpanded, setIsExpanded] = useState(false)

    const expand = () => {
        setIsExpanded(prevState => !prevState)
    }

    return (
        <>
            <div className="history" style={isExpanded ? {marginBottom: 0}: undefined}>
                <p className="history-see-more"><i className={`fa fa-chevron-${isExpanded ? 'up' :'down'}`} aria-hidden="true" onClick={expand}></i></p>
                <p className="history-date">{date}</p>
                <p className="history-amount-description">{history.description}</p>
                <p className="history-amount">{symbol}{history.amount.toLocaleString("fr-FR")}</p>
                <p className="history-balance">{symbol}{history.balance.toLocaleString("fr-FR")}</p>
            </div>
            {isExpanded && <ExpandedHistory index={index} history={history}/>}
        </>
    )
}
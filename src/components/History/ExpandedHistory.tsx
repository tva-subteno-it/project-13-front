import {History} from "../../@types";
import {Category} from "./Category.tsx";
import {Notes} from "./Note.tsx";

export function ExpandedHistory({history, index}: {history : History, index: number}){

    return <div className={"history-expanded"}>
        <p>Transaction type: {history.transactionType}</p>
        <div className={"flex"}><p>Category:&nbsp;</p> <Category index={index} history={history}/></div>
        <div className={"flex"}><p>Notes:&nbsp; {history.notes}</p> <Notes index={index} history={history}/></div>
    </div>
}
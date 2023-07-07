import {History} from "../../@types";
import {Category} from "./Category.tsx";
import {Notes} from "./Note.tsx";

export function ExpandedHistory({history}: {history : History}){

    return <div className={"history-expanded"}>
        <p>Transaction type: {history.transactionType}</p>
        <div className={"flex"}><p>Category:&nbsp; {history.category}</p> <Category history={history}/></div>
        <div className={"flex"}><p>Notes:&nbsp; {history.notes}</p> <Notes history={history}/></div>
    </div>
}
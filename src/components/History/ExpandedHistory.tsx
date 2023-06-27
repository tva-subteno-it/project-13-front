import {History} from "../../@types";
import {useState} from "react";

export function ExpandedHistory({history}: {history : History}){
    const [isEditingCategory, setIsEditingCategory] = useState(false);
    const [isEditingNotes, setIsEditingNotes] = useState(false);
    const [category, setCategory] = useState(history.category);
    const [notes, setNotes] = useState(history.notes);

    return <div className={"history-expanded"}>
        <p>Transaction type: {history.transactionType}</p>
        <p>Category: {history.category} {isEditingCategory ?
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}/> :
            <i className={"fa fa-pencil"} onClick={() => setIsEditingCategory(true)}></i>}</p>
        <p>Notes: {history.notes} {isEditingNotes ? <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)}/> : <i className={"fa fa-pencil"} onClick={() => setIsEditingNotes(true)}></i>}</p>
    </div>
}
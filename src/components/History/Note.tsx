import {useRef, useState} from "react";
import {History} from "../../@types";

interface Props {
    history : History;
    index: number;
}

export function Notes({history, index}: Props){
    const [notes, setNotes] = useState(history.notes);
    const [isEditingNotes, setIsEditingNotes] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const save = ()=>{
        setIsEditingNotes(false);
        setNotes(inputRef.current?.value ?? '');
    }

    if (isEditingNotes) {
        return <>
        <input type="text" defaultValue={notes} ref={inputRef}/>
            <button className={"button-clean button-save"} onClick={save}><i className="fa fa-check" aria-hidden="true"></i></button>
            <button className={"button-clean button-cancel"} onClick={() => setIsEditingNotes(false)}><i className="fa fa-times" aria-hidden="true"></i></button>
        </>
    } else {
        return <div className={"flex"}>
            <p>{notes}</p>
            <button className={"button-clean "}><i className={"fa fa-pencil"} onClick={() => setIsEditingNotes(true)}></i></button>
        </div>
    }
}
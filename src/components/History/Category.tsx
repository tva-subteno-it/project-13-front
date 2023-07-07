import {useRef, useState} from "react";
import {History} from "../../@types";
import {CATEGORIES} from "../../constants";

interface Props {
    history : History
}

export function Category({history}: Props){
    const [isEditingCategory, setIsEditingCategory] = useState(false);
    const [category, setCategory] = useState(history.category);
    const selectRef = useRef<HTMLSelectElement>(null);

    const save = ()=>{
        setIsEditingCategory(false);
        setCategory(selectRef.current?.value || '');
    }

    if (isEditingCategory) {
        return <>
            <select defaultValue={category} ref={selectRef}>
                {CATEGORIES.map((category) => <option value={category} key={category}>{category}</option>)}
            </select>
            <button className={"button-clean button-save"} onClick={save}><i className="fa fa-check" aria-hidden="true"></i></button>
            <button className={"button-clean button-cancel"} onClick={() => setIsEditingCategory(false)}><i className="fa fa-times" aria-hidden="true"></i></button>
        </>
    } else {
        return <div className={"flex"}>
            <p>{category}</p>
            <button className={"button-clean button-edit"}><i className={"fa fa-pencil"} onClick={() => setIsEditingCategory(true)}></i></button>
        </div>
    }
}
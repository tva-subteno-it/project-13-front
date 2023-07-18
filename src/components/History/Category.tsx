import {useRef, useState} from "react";
import {History} from "../../@types";
import {CATEGORIES} from "../../constants";

interface Props {
    history : History
}

export function Category({history}: Props){
    const [isEditingCategory, setIsEditingCategory] = useState(false);
    const [category, setCategory] = useState(CATEGORIES[history.category_id]);
    const selectRef = useRef<HTMLSelectElement>(null);

    const save = ()=>{
        setIsEditingCategory(false);
        setCategory(selectRef.current?.value ?? '');
    }

    if (isEditingCategory) {
        return <>
            <select defaultValue={category} ref={selectRef}>
                {Object.entries(CATEGORIES).map(([key, value]) => <option defaultValue={key} key={key} selected={key === history.category_id}>{value}</option>)}
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
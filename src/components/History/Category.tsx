import {useEffect, useRef, useState} from "react";
import {History} from "../../@types";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {getCategories} from "../../features/accounts/accountSlice.ts";

interface Props {
    history : History;
    index: number;
}

export function Category({history, index}: Props){
    const {categories} = useSelector((state: RootState) => state.accounts);
    const dispatch = useDispatch<AppDispatch>()
    const [isEditingCategory, setIsEditingCategory] = useState(false);
    const [category, setCategory] = useState("");
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        if (!categories.length){
            dispatch(getCategories())
        } else {
            setCategory(categories.find(category => category._id === history.category_id)?.name ?? '')
        }
    }, [categories])

    const save = ()=>{
        setIsEditingCategory(false);
        setCategory(selectRef.current?.value ?? '');
    }

    if (isEditingCategory) {
        return <>
            <select defaultValue={category} ref={selectRef}>
                {categories.map((cat) => <option defaultValue={cat._id} key={cat._id}>{cat.name}</option>)}
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
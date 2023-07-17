import {ChangeEvent} from "react";

interface EditNameProps {
    editing: boolean,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function EditName({editing, value, onChange}: EditNameProps) {
    if (!editing) {
        return <h1 className={"username__title"}>{value}</h1>
    }
    return <input className={"username__input"} type="text" value={value} onChange={onChange}/>
}

export {ToggleEditing} from "./toggleEditing.tsx";
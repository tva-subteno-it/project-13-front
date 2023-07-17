interface ToggleEditingProps {
    onClick: () => void,
    isEditing: boolean,
    onSave: () => void
}

export function ToggleEditing({onClick, isEditing, onSave}: ToggleEditingProps) {
    if (!isEditing) {
        return <button className="edit-button" onClick={onClick}>Edit Name</button>
    } else {
        return <div className={"username"}>
            <button className={"button-clean username__button username__button-save"} onClick={onSave}>Save</button>
            <button className={"button-clean username__button username__button-cancel"} onClick={onClick}>Cancel</button>
        </div>
    }
}
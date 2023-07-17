interface ToggleEditingProps {
    onClick: () => void,
    isEditing: boolean,
    onSave: () => void
}

export function ToggleEditing({onClick, isEditing, onSave}: ToggleEditingProps) {
    if (!isEditing) {
        return <button className="edit-button" onClick={onClick}>Edit Name</button>
    } else {
        return <>
            <button className={"button-clean button-save"} onClick={onSave}><i className="fa fa-check"
                                                                               aria-hidden="true"></i></button>
            <button className={"button-clean button-cancel"} onClick={onClick}><i className="fa fa-times"
                                                                                  aria-hidden="true"></i></button>
        </>
    }
}
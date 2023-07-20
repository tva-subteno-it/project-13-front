import Transaction from "../../components/History";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {useEffect, useState} from "react";
import {EditName, ToggleEditing} from "../../components/EditName";
import {editNameAction} from "../../features/user/userAction.tsx";
import {getAccounts} from "../../features/accounts/accountSlice.ts";

export default function Profile() {
    const {firstName, lastName, token} = useSelector((state: RootState) => state.user);
    const [isEditing, setIsEditing] = useState(false);
    const [newFirstName, setNewFirstName] = useState(firstName ?? "");
    const [newLastName, setNewLastName] = useState(lastName ?? "");
    const accounts = useSelector((state: RootState) => state.accounts);
    const dispatch = useDispatch<AppDispatch>();

    const handleSave = () => {
        setIsEditing(false);
        dispatch(editNameAction({firstName: newFirstName, lastName: newLastName, token: token ?? ""}));
    }

    useEffect(() => {
        if (token){
            dispatch(getAccounts(token))
        }
    }, [dispatch, token])

    return <main className="main bg-dark">
        <div className="header">
            <h1>Welcome back</h1>
            <div className={"username"}>
                <EditName editing={isEditing} value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)}/>
                <EditName editing={isEditing} value={newLastName} onChange={(e) => setNewLastName(e.target.value)}/>
            </div>
            <ToggleEditing isEditing={isEditing} onClick={() => setIsEditing(!isEditing)} onSave={handleSave} />
        </div>
        <h2 className="sr-only">Accounts</h2>
        {accounts.accounts.map(data => <Transaction {...data} key={data._id}/>)}
    </main>
}

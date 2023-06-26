import {useRouteError} from 'react-router-dom'

export default function NotFound() {
    const error = useRouteError()
    return (<div><h1>{error.status}</h1><p>{error.data}</p></div>)
}
import {useEffect, useState} from "react";

export function useFetch<T>(url: string, options: RequestInit) {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(url, options)
                const json = await res.json()
                setData(json.body)
                setIsLoading(false)
            } catch (error: any) {
                setError(error)
            }
        }
        fetchData()
    }, [])
    return {data, error, isLoading}
}

export default useFetch
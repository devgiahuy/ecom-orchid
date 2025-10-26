import { useCallback, useEffect, useState } from "react"

export function useApiHandle<T>(
    callApi: (...args: any[]) => Promise<{ data: T | null; error: string | null }>,
    auto = false,
    ...initialArgs: any[]
) {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    // handle exception ngoài Axios
    const execute = useCallback(
        async (...args: any[]) => {
            setLoading(true)
            try {
                const { data, error } = await callApi(...args)
                setData(data)
                setError(error)
            } catch (err: any) {
                setError(err.message || "Unknown error")
                setData(null)
            } finally {
                setLoading(false)
            }
        },
        [callApi]
    )

    useEffect(() => {
        if (auto) execute(...initialArgs)
    }, [auto, execute, initialArgs])

    return { data, error, loading, execute }
}

// src/hooks/useOrchid.ts
import { useState, useCallback } from "react"
import type { Orchid } from "../../model/orchid"
import { orchidApi } from "../../service/orchidApi"

export function useGetAllOrchids() {
    const [data, setData] = useState<Orchid[] | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const fetch = useCallback(async () => {
        setLoading(true)
        const res = await orchidApi.getAll()
        setData(res.data)
        setError(res.error)
        setLoading(false)
    }, [])

    return { data, error, loading, refetch: fetch }
}

export function useGetOrchidById() {
    const [data, setData] = useState<Orchid | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const fetch = useCallback(async (id: number) => {
        setLoading(true)
        const res = await orchidApi.getById(id)
        setData(res.data)
        setError(res.error)
        setLoading(false)
    }, [])

    return { data, error, loading, fetch }
}

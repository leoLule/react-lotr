import React, { useState, useEffect } from 'react'

const useFetchData = (selection) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const apiUrl = 'https://the-one-api.dev/v2'
    const APITOKEN = import.meta.env.VITE_API_KEY
    let options = {
        headers: {
            method: 'GET',
            Authorization: `Bearer ${APITOKEN}`,
        },
    }
    // console.log(selection)
    //why do i need useEffect here (is a click enevnt not enough?) if I anyways make it depend on the selection and on its change ; so it will rerender
    useEffect(() => {
        if (!selection) {
            return
        }
        setLoading(true)
        async function fetchData() {
            const url = apiUrl + '/' + selection
            try {
                const res = await fetch(url, options)
                const jsonData = await res.json()
                setData(jsonData)
                console.log('DATA', jsonData)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        // console.log(data)
        fetchData()
    }, [selection])

    return { data, loading, error }
}

//hook does not return jsx, thats why we return the parameter to themselves, but i m not sure if i have and if it is a good practice -  works also if i dont return anything so far
export default useFetchData

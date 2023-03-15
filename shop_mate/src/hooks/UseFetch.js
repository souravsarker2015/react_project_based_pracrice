import {useEffect, useState} from "react";

export const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url, {signal: controller.signal});
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const result = await response.json();
                setLoading(false)
                setData(result);
                // console.log(result);
                setError("")
            } catch (error) {
                console.log(error.message)
                setLoading(false)
                setError(error.message)
            }

        }
        fetchData(url);
        return () => controller.abort()
    }, [url]);

    // return {data: data, loading: loading}
    return {data, loading, error}
};
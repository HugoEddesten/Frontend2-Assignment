import { useEffect, useState } from "react"

const GetDB = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
            const rawData = await fetch(url);
            const jsonData = await rawData.json();
                
            setData(jsonData);
            setLoading(false);
            } catch (exception) {
                setError(exception);
                setLoading(false);
            }
        }   
        getData()
    }, [url])

    return {loading, error, data};
}

export default GetDB
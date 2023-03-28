import {useState, useEffect} from "react";

const useFetch = (url)=>{
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Fetching failed');
                }
                return res.json();
            })
            .then((json) => {
                setLoading(false);
                setError(null);
                setData(json);
            })
            .catch((e) => {
                setData([]);
                setLoading(false);
                setError(e.message);
            });
    }, [url]);

    return (
        {data, loading, error}
    );
}

export default useFetch;
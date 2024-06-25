import axios from 'axios';
import { useState, useEffect } from 'react';

const useList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(import.meta.env.VITE_ECOM_API);

                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); 

    return { data, loading, error };
};

export default useList;

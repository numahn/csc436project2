import React from 'react'
import { useEffect, useState } from 'react';

export default function Home() {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        // const url = 'http://localhost:3001/v1/api/posts';
        setLoading(true);
        setError(false);
        try {
            const request = await fetch(url);
            const response = await request.json();
            setBooks(response);
           
        } catch(e) {
            setError('Error: ' + e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
          Hi  
        </>
    )
}

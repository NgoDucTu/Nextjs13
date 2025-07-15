
'use client';

import useSWR from 'swr';
import { useEffect } from 'react';

const fetcher = (url: string) => fetch(url).then(res => {
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
});

export default function FetchData() {
    const { data, error } = useSWR('http://localhost:8000/blogs', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    useEffect(() => {
        if (data) {
            console.log('Dữ liệu blog:', data);
        }

        if (error) {
            console.error('Lỗi khi fetch:', error.message);
        }
    }, [data, error]);

    return null; // Không render gì cả
}

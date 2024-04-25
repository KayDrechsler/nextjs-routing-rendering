/**
 * # News Page
 */
"use client";

/**
 * ## Imports
 */
import { useState, useEffect } from 'react';
import NewsList from '@/components/NewsList/NewsList';

/**
 * ## Component
 */
export default function NewsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [news, setNews] = useState();

    useEffect(() => {
        async function fetchNews() {
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/news');

            if (!response.ok) {
                setError('Failed to fetch news.');
                setIsLoading(false);
            }

            const news = await response.json();
            setIsLoading(false);
            setNews(news);
        }

        fetchNews();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    let newsContent;

    if (news) {
        newsContent = <NewsList news={news} />
    }

    return (
        <article>
            <h1>News page</h1>
            {newsContent}
        </article>
    );
};
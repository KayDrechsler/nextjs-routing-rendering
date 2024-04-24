import NewsList from "@/components/NewsList/NewsList";
import { getLatestNews } from "@/lib/news";

export default function LatestNewspage() {
    const latestNews = getLatestNews();

    return (
        <>
            <h2>Latest News</h2>
            <NewsList news={latestNews} />
        </>
    );
};
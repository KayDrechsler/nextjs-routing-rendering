import NewsList from "@/components/NewsList/NewsList";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewspage() {
    const latestNews = await getLatestNews();

    return (
        <>
            <h2>Latest News</h2>
            <NewsList news={latestNews} />
        </>
    );
};
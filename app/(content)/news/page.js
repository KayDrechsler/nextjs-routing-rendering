/**
 * # News Page
 */

/**
 * ## Imports
 */
import NewsList from '@/components/NewsList/NewsList';
import { getAllNews } from '@/lib/news';

/**
 * ## Component
 */
export default async function NewsPage() {
    /* Sending the request from within the component function.
     * `fetch()` is available even though this being a server component, because:
     * a) it's supported by Node.js which executes executes this server side code anyways.
     * b) Next.js extends this `fetch()` and adds some extra caching related features to it.
     */
    // const response = await fetch('http://localhost:8080/news');

    // if (!response.ok) {
    //     throw new Error('Failed to fetch news');
    // }

    // const news = await response.json();

    /* The above code is just an example. Since the data base lives within this application,
     * we can also directly reach out to it. */
    const news = await getAllNews();

    return (
        <article>
            <h1>News page</h1>
            <NewsList news={news} />
        </article>
    );
};
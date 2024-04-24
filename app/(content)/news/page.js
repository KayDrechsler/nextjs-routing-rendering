/**
 * # News Page
 */

/**
 * ## Imports
 */
import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '@/components/NewsList/NewsList';

/**
 * ## Component
 */
export default function NewsPage() {

    return (
        <article>
            <h1>News page</h1>
            {DUMMY_NEWS && (
                <NewsList news={DUMMY_NEWS} />
            )}
        </article>
    );
};
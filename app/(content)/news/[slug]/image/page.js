/**
 * # Image Page
 */

/**
 * ## Imports
 */
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";


export default async function ImagePage({params}) {
    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <figure className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </figure>
    );
};

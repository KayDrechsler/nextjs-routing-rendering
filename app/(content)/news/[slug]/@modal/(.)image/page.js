/**
 * # Intercepted Image Page
 */

/**
 * ## Imports
 */
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";
import ModalBackdrop from "@/components/ModalBackdrop/ModalBackdrop";


export default async function ImagePage({params}) {

    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <ModalBackdrop />
            <dialog className="modal" open>
                <figure className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </figure>
            </dialog>
        </>
    );
};

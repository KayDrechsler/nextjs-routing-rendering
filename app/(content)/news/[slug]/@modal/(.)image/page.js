"use client";
/**
 * # Intercepted Image Page
 */

/**
 * ## Imports
 */
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";


export default function ImagePage({params}) {
    const router = useRouter();

    const newsItemSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <div className="modal-backdrop" onClick={router.back} />
            <dialog className="modal" open>
                <figure className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </figure>
            </dialog>
        </>
    );
};

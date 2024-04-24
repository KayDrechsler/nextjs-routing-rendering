export default function ArchiveLayout({archive, latest, children}) {
    return (
        <article id="archive">
            <h1>News Archive</h1>
            <section id="archive-filter">{archive}</section>
            <section id="archive-latest">{latest}</section>
        </article>
    );
}
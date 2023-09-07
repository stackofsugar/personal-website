import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "components/layout";
import { getAllPostSlugs, getPostMetadata } from "lib/posts";
import { paginate, getAllPost } from "lib/pagination";

export default ({ allPostMetadata }) => {
    const { page } = useRouter().query;
    const featuredPosts = []; // TODO
    const paginationData = paginate(allPostMetadata, page).data;
    const paginationPage = paginate(allPostMetadata, page).page;

    function setLastPageNumber() {
        try {
            sessionStorage.setItem("last-blog-page", page);
        } catch (error) {}
    }

    return (
        <Layout highlight="blog">
            <Head>
                <title>Blog · Christopher Digno</title>
            </Head>
            <div className="container">
                {setLastPageNumber()}
                <div id="top-section">
                    <div className="text-center">
                        <div className="display-5">Blog Posts</div>
                        <div className="fs-4">
                            A blank canvas for me to <span className="font-highlighted">express myself</span>.
                        </div>
                    </div>
                    <div className="mt-5">
                        {paginationData.map((section) => (
                            <div className="mb-2">
                                <div>
                                    <div className="fs-3 fw-bold">{section.sectionYear}</div>
                                    <hr className="mb-2 mt-1" />
                                </div>
                                <div className="blogpost-list-root">
                                    {section.posts.map((post) => (
                                        <div className="blogpost-list-entry">
                                            <Link href={"/blog/" + post.slug} className="link-yellow link-yellow-special">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="me-2">{post.title}</div>
                                                    <div className="flex-shrink-0">{post.created_at_formatted.string}</div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {paginationPage.total > 1 ? (
                        <div className="mt-5">
                            <nav aria-label="Blog Navigation" data-bs-theme="dark">
                                <ul className="pagination justify-content-center">
                                    <li className={"page-item " + (Boolean(paginationPage.prev) ? "" : "disabled")}>
                                        <Link
                                            className="page-link"
                                            aria-label="Previous page"
                                            href={"/blog?page=" + (Boolean(paginationPage.prev) ? paginationPage.prev : "1")}
                                        >
                                            <span aria-hidden="true">&laquo;</span>
                                        </Link>
                                    </li>
                                    {[...Array(paginationPage.total).keys()].map((pageNum) => {
                                        /* idk why putting this ternary directly below doesn't work... */
                                        var activeState = paginationPage.now == pageNum + 1 ? "active" : "";
                                        return (
                                            <li className={"page-item " + activeState}>
                                                <Link className="page-link" href={"/blog?page=" + (pageNum + 1)}>
                                                    {pageNum + 1}
                                                </Link>{" "}
                                            </li>
                                        );
                                    })}
                                    <li className={"page-item " + (Boolean(paginationPage.next) ? "" : "disabled")}>
                                        <Link
                                            className="page-link"
                                            aria-label="Next page"
                                            href={"/blog?page=" + (Boolean(paginationPage.next) ? paginationPage.next : "1")}
                                        >
                                            <span aria-hidden="true">&raquo;</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    ) : null}
                    <div className="mt-5 text-center text-secondary small">
                        Unless otherwise noted, all contents of this blog is licensed under{" "}
                        <a target="_blank" rel="noreferrer noopener" href="https://creativecommons.org/licenses/by/4.0/" className="link-secondary">
                            Creative Commons Attribution 4.0 International (CC BY 4.0)
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export function getStaticProps() {
    var allPostSlugs = getAllPostSlugs();
    var allPostMetadata = allPostSlugs.map((item) => {
        return getPostMetadata(item.params.rawfilename);
    });

    return {
        props: { allPostMetadata },
    };
}

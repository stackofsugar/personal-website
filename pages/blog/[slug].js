import Layout from "components/layout";
import Head from "next/head";
import Link from "next/link";
import { getAllPostSlugs, getBlogPostMapping, getPostData } from "../../lib/posts";
import { parseDate } from "lib/pagination";

export default ({ postData }) => {
    const metaTitle = `Digno's Blog - ${postData.title}`;

    function getLastPageNumber() {
        let pageNum = "";
        try {
            pageNum = parseInt(sessionStorage.getItem("last-blog-page"));
        } catch (error) {}
        if (pageNum && pageNum != NaN) return "?page=" + pageNum;
        else return "";
    }

    return (
        <Layout highlight="blog">
            <Head>
                <title>{`${postData.title} · Stackofsugar Blog`}</title>

                <meta key="og_title" name="og:title" content={metaTitle} />
                <meta key="og_description" name="og:description" content={postData.excerpt} />

                <meta key="twitter_title" property="twitter:title" content={metaTitle} />
                <meta key="twitter_description" property="twitter:description" content={postData.excerpt} />

                <meta key="description" name="description" content={postData.excerpt} />
            </Head>
            <section className="blog-post">
                <div className="container container-special">
                    <div id="head-section">
                        <div id="back-button" className="mb-3">
                            <Link href={"/blog" + getLastPageNumber()} className="link-yellow">
                                Back to blog home
                            </Link>
                        </div>
                        <div id="tags" className="mb-2 d-flex flex-row flex-wrap">
                            {postData.tags.map((item) => (
                                <div className="badge-list-item-light-small">{item}</div>
                            ))}
                        </div>
                        <div id="title" className="mb-2">
                            {postData.title}
                        </div>
                        <div id="meta-section" className="">
                            <div>
                                <span className="text-muted">written by </span>
                                <span>{postData.author}</span>
                                <span className="text-muted"> on </span>
                                <span>{postData.created_at}</span>
                            </div>
                            {postData.last_updated ? (
                                <div>
                                    <span className="text-muted">last updated at </span>
                                    <span>{postData.last_updated}</span>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="my-4" id="content-section" dangerouslySetInnerHTML={{ __html: postData.content }}></div>
                    <div id="license-section">
                        <div className="text-secondary small">
                            Unless noted somewhere, this blog post is licensed under{" "}
                            <a
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://creativecommons.org/licenses/by/4.0/"
                                className="link-secondary"
                            >
                                Creative Commons Attribution 4.0 International (CC BY 4.0).
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export async function getStaticProps({ params }) {
    var filename = "";
    getBlogPostMapping().map((item) => {
        if (params.slug == item.slug) {
            filename = item.filename;
        }
    });
    const rawPostData = await getPostData(filename);
    const postData = {
        author: rawPostData.author,
        title: rawPostData.title,
        tags: rawPostData.tags,
        created_at: parseDate(rawPostData.created_at, true).string,
        last_updated: parseDate(rawPostData.last_updated, true)?.string || null,
        content: rawPostData.contentHtml,
        excerpt: rawPostData.excerpt,
    };
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostSlugs();
    return {
        paths,
        fallback: false,
    };
}

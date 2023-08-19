import Head from "next/head";
import Link from "next/link";
import Layout from "components/layout";
import Construction from "components/construction";
import { getAllPostSlugs, getPostMetadata } from "lib/posts";

export default ({ allPostMetadata }) => {
    return (
        <Layout highlight="blog">
            <Head>
                <title>Blog · Christopher Digno</title>
            </Head>
            <div className="container">
                <div id="top-section">
                    <div className="text-center">
                        <div className="display-5">Blog</div>
                        <div className="fs-4">
                            A place where I <span className="font-highlighted">express myself</span>.
                        </div>
                    </div>
                    <div className="mt-5 text-center">Lorem</div>
                </div>
            </div>
        </Layout>
    );
};

export function getStaticProps() {
    var allPostSlugs = getAllPostSlugs();
    var allPostMetadata = allPostSlugs.map((item) => {
        return getPostMetadata(item.params.slug);
    });

    return {
        props: { allPostMetadata },
    };
}

import Layout from "components/layout";
import { getAllPostSlugs, getPostData } from "../../lib/posts";

export default ({ postData }) => {
    return (
        <Layout highlight="blog">
            {postData.title}
            <br />
            {postData.slug}
            <br />
            {postData.author}
            <br />
            {postData.created_at}
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    );
};

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.slug);
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

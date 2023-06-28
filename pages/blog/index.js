import Head from "next/head";
import Link from "next/link";
import Layout from "components/layout";
import Construction from "components/construction";

export default () => {
    return (
        <Layout highlight="blog">
            <Construction title={"Blog"}></Construction>
        </Layout>
    );
};

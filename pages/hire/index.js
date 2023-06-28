import Head from "next/head";
import Link from "next/link";
import Layout from "components/layout";
import Construction from "components/construction";

export default () => {
    return (
        <Layout highlight="hire_me">
            <Construction title={"Hire Me"}></Construction>
        </Layout>
    );
};

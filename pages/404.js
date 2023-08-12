import Layout from "components/layout";
import { createTitle } from "config/defaults";
import Head from "next/head";
import Link from "next/link";

export default () => {
    return (
        <Layout>
            <Head>
                <title>{createTitle("Page Not Found")}</title>
            </Head>

            <div className="container">
                <div className="text-center">
                    <div className="mb-2" style={{ fontSize: "10rem" }}>
                        <i class="bi bi-patch-question"></i>
                    </div>
                    <h1 className="mb-2 font-heading">We can't find the page you're looking for :(</h1>
                    <h3 className="mb-4">That's all we can tell you.</h3>
                    <Link className="button-elegant fs-4" href={"/"}>
                        Go to Home
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

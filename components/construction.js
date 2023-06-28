import Head from "next/head";
import Link from "next/link";

import { createTitle } from "config/defaults";

export default ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{createTitle(title + " - Under Construction")}</title>
            </Head>

            <div className="container">
                <div className="text-center">
                    <div className="mb-2" style={{ fontSize: "10rem" }}>
                        <i class="bi bi-cone-striped"></i>
                    </div>
                    <h1 className="mb-2 font-heading">
                        This page is <span className="font-highlighted">under construction</span>.
                    </h1>
                    <h3 className="mb-4">That's all we can tell you.</h3>
                    <Link className="button-elegant fs-4" href={"/"}>
                        Go to Home
                    </Link>
                </div>
            </div>
        </>
    );
};

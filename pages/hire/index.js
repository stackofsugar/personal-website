import Head from "next/head";
import Link from "next/link";
import Layout from "components/layout";
import Construction from "components/construction";

export default () => {
    const links = [
        {
            title: "Tech Stacks",
            link: "/#Tech Stack",
        },
        {
            title: "Experiences",
            link: "/#Experience",
        },
        {
            title: "Publications",
            link: "/#Publication",
        },
        {
            title: "Certificates",
            link: "/#Certification",
        },
        {
            title: "Projects",
            link: "/projects",
        },
    ];

    const positions = [
        "Fullstack Web Developer",
        "API Developer",
        "Deep Learning Engineer",
        "Data Analyst",
        "English-Indonesian Translator",
    ];

    return (
        <Layout highlight="hire_me">
            <Head>
                <title>Hire Me · Christopher Digno</title>
            </Head>
            <div className="container">
                <div id="top-section">
                    <div className="text-center">
                        <div className="display-5">Hire Me!</div>
                        <div className="fs-4">
                            I will be a <span className="font-highlighted">good addition</span> to your company!
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="text-center">
                        <div className="fs-4">If you are looking for...</div>
                        <div className="d-flex justify-content-center flex-row flex-wrap">
                            {positions.map((item) => (
                                <div className="badge-list-item">{item}</div>
                            ))}
                        </div>
                        <div className="fs-4 mt-4">
                            <span className="font-highlighted">I can work with you!</span> Please don't hesitate to keep in touch by Email below!
                        </div>
                        <div>
                            You might be interested to take a look at my
                            {links.map((item, i, row) => (
                                <span>
                                    {" "}
                                    {i + 1 === row.length ? "and " : ""}
                                    <Link href={item.link} className="link-yellow">
                                        {item.title}
                                    </Link>
                                    {i + 1 === row.length ? "" : ","}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center display-3">
                    <i class="bi bi-arrow-down-circle"></i>
                </div>
                <div className="mt-4 fs-5 text-center">
                    <a href="mailto:digno.christopher@gmail.com" className="link-yellow">
                        digno.christopher@gmail.com
                    </a>
                </div>
            </div>
        </Layout>
    );
};

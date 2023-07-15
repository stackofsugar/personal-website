import Head from "next/head";
import Layout from "components/layout";

export default () => {
    const imageThumbnailPlaceholder = "/images/pholder.png";

    const projects = [
        {
            name: "My Personal Website",
            description: `
            This website, built from scratch using Next.js and Bootstrap CSS, hosted on Vercel.
            `,
            thumbnail: imageThumbnailPlaceholder,
            links: [
                {
                    name: "Website",
                    href: "https://www.stackofsugar.com/",
                },
                {
                    name: "GitHub",
                    href: "https://github.com/stackofsugar/personal-website",
                },
            ],
            tags: ["Laravel", "MySQL", "React.js"],
        },
        {
            name: "Project Name",
            description: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit,
                consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit,
            `,
            thumbnail: imageThumbnailPlaceholder,
            links: [
                {
                    name: "Link 1",
                    href: "https://google.com",
                },
                {
                    name: "Link 2",
                    href: "https://twitter.com",
                },
            ],
            tags: ["Laravel", "MySQL", "React.js"],
        },
        {
            name: "My Personal Website",
            description: `
            This website, built from scratch using Next.js and Bootstrap CSS, hosted on Vercel.
            `,
            thumbnail: imageThumbnailPlaceholder,
            links: [
                {
                    name: "Website",
                    href: "https://www.stackofsugar.com/",
                },
                {
                    name: "GitHub",
                    href: "https://github.com/stackofsugar/personal-website",
                },
            ],
            tags: ["Laravel", "MySQL", "React.js"],
        },
        {
            name: "Project Name",
            description: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit,
                consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit, consectetur adipiscing elit,
            `,
            thumbnail: imageThumbnailPlaceholder,
            links: [
                {
                    name: "Link 1",
                    href: "https://google.com",
                },
                {
                    name: "Link 2",
                    href: "https://twitter.com",
                },
            ],
            tags: ["Laravel", "MySQL", "React.js"],
        },
    ];

    return (
        <Layout highlight="projects">
            <Head>
                <title>My Projects · Christopher Digno</title>
            </Head>
            <div className="container">
                <div id="top-section">
                    <div className="text-center">
                        <div className="display-5">
                            Some of <span className="font-highlighted">my projects</span> that I'm really proud of!
                        </div>
                    </div>
                </div>
                <div className="row flex-row-reverse mt-section">
                    <div id="sidebar" style={{ top: "5rem" }} className="sticky-lg-top h-100 col-12 col-lg-3 mb-4 mb-lg-0">
                        <div>Sidebar</div>
                        <div>Sidebar</div>
                        <div>Sidebar</div>
                        <div>Sidebar</div>
                        <div>Sidebar</div>
                        <div>Sidebar</div>
                    </div>
                    <div className="col">
                        <div className="row need-masonry" data-masonry='{"percentPosition": true }'>
                            {projects.map((item) => (
                                <div className="col-12 col-md-6">
                                    <div className="card rounded text-bg-dark mb-4">
                                        <img src={item.thumbnail} className="card-img-top" />
                                        <div className="card-body">
                                            <div className="card-title">
                                                <div className="fs-4">{item.name}</div>
                                            </div>
                                            <div className="card-text">
                                                <div className="text-muted mb-1">{item.description}</div>
                                                {item.links.length > 0 ? (
                                                    <div className="mb-1">
                                                        <span>Links: </span>
                                                        <span>
                                                            {item.links.map((linkItem) => (
                                                                <a href={linkItem.href} target="_blank" className="me-1 link-yellow">
                                                                    {linkItem.name}
                                                                </a>
                                                            ))}
                                                        </span>
                                                    </div>
                                                ) : null}
                                                {item.tags.length > 0 ? (
                                                    <div className="d-flex flex-row flex-wrap">
                                                        {item.tags.map((tagItem) => (
                                                            <div className="badge-list-item-light-small">{tagItem}</div>
                                                        ))}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

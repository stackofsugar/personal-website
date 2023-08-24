import Head from "next/head";
import Layout from "components/layout";
import Script from "next/script";

import Image from "next/image";

export default () => {
    const imageThumbnailPlaceholder = "/images/pholder.webp";

    const defaultImageWidth = 700;
    const defaultImageHeight = 350;

    const projects = [
        {
            name: "My Personal Website",
            description: `
                This website that I use to showcase my skills and porfolio, as well as tell the world about what an amazing life I live!
            `,
            thumbnail: "/images/projects/website.webp",
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
            tags: ["Next.js", "Bootstrap CSS", "Vercel Hosting"],
        },
        {
            name: "The Orbit Game",
            description: `
                A simple game about guiding your planet to avoid asteroids with your mouse to pull your planet with its gravity. Created
                in less than 4 days as an entry to a Game Jam competition set up by my lecturers.
            `,
            thumbnail: "/images/projects/orbit.webp",
            links: [
                {
                    name: "GitHub",
                    href: "https://github.com/stackofsugar/orbit-game",
                },
            ],
            tags: ["C++", "SDL2"],
        },
        {
            name: "Fashion Campus API",
            description: `
                An E-commerce API that my team built as my bootcamp program's final project. Supports most of the features a general
                E-commerce site offers.
            `,
            thumbnail: "/images/projects/fashioncampusapi.webp",
            links: [
                {
                    name: "GitLab",
                    href: "https://gitlab.com/stackofsugar/SCartemisFP",
                },
            ],
            tags: ["Python Flask", "MySQL"],
        },
        {
            name: "Data Science Projects",
            description: `
                A repository full of my data science projects, including my own BERT language model for Indonesian song lyrics
                and Tweets emotion recognition. All of my projects are built on top of the TensorFlow library.
            `,
            thumbnail: "/images/projects/kaggle.webp",
            links: [
                {
                    name: "Kaggle Code Repo",
                    href: "https://www.kaggle.com/stackofsugar/code",
                },
            ],
            tags: ["Python", "Tensorflow", "BERT"],
        },
        {
            name: "My (Old) Personal Website",
            description: `
                The 1st iteration of my personal website. Now, the domain is home to my projects hosted on Github Pages. I switched to 
                Next.js + Vercel because of the versatility.
            `,
            thumbnail: "/images/projects/oldwebsite.webp",
            links: [
                {
                    name: "Website",
                    href: "https://projects.stackofsugar.com/",
                },
                {
                    name: "GitHub",
                    href: "https://github.com/stackofsugar/stackofsugar.github.io",
                },
            ],
            tags: ["React.js", "Bootstrap CSS", "GitHub Pages"],
        },

        {
            name: "KlinikPintar",
            description: `
                A hospital management website that my team built, capable of making online appointments as well as patient management by 
                the hospital's staff. Features includes online admission, patient referalls, drug administration, medical records,
                etc. Developed as a final project. 
            `,
            thumbnail: "/images/projects/klinikpintar.webp",
            links: [
                {
                    name: "GitHub",
                    href: "https://github.com/stackofsugar/klinik-pintar",
                },
            ],
            tags: ["Laravel (9)", "MySQL", "jQuery"],
        },
        {
            name: "TurBot",
            description: `
                An interactive and educational Turing Machine simulator that can be used to visualize basic math problems from 
                addition and multiplication to temperature conversion between different scales.
            `,
            thumbnail: "/images/projects/turbot.webp",
            links: [
                {
                    name: "Website",
                    href: "https://projects.stackofsugar.com/turbot/",
                },
                {
                    name: "GitHub",
                    href: "https://github.com/stackofsugar/turbot",
                },
            ],
            tags: ["HTML", "CSS"],
        },

        {
            name: "HepaPredict",
            description: `
                An Expert System implementation for Hepatitis self diagnosis. Developed for a final project,
                so DO NOT USE IT FOR ANY MEDICAL PURPOSES.
            `,
            thumbnail: "/images/projects/hepapredict.webp",
            links: [
                {
                    name: "Website",
                    href: "https://projects.stackofsugar.com/hepa-predict/",
                },
                {
                    name: "GitHub",
                    href: "https://github.com/stackofsugar/hepa-predict",
                },
            ],
            tags: ["HTML", "CSS", "jQuery"],
        },
        {
            name: "IndustryScope",
            description: `
                A Decision Support System implementation to help you choose a suitable place to open your industry according to
                its needs in Surakarta, Indonesia. Developed for a final project.
            `,
            thumbnail: "/images/projects/industryscope.webp",
            links: [
                {
                    name: "Website",
                    href: "https://projects.stackofsugar.com/industry-scope/",
                },
                {
                    name: "GitHub",
                    href: "https://github.com/stackofsugar/industry-scope",
                },
            ],
            tags: ["HTML", "CSS", "jQuery"],
        },
    ];

    return (
        <Layout highlight="projects">
            <Head>
                <title>My Projects · Christopher Digno</title>
            </Head>
            <Script strategy="beforeInteractive" src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" />
            <Script strategy="beforeInteractive" src="https://unpkg.com/imagesloaded@5.0.0/imagesloaded.pkgd.min.js" />
            <div className="container">
                <div id="top-section">
                    <div className="text-center">
                        <div className="display-5">Projects</div>
                        <div className="fs-4">
                            Some of <span className="font-highlighted">my projects</span> that I'm really proud of!
                        </div>
                    </div>
                </div>
                <div className="row mt-section justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="row need-masonry" data-masonry='{"percentPosition": true }'>
                            {projects.map((item) => (
                                <div className="col-12 col-md-6">
                                    <div className="card rounded text-bg-dark mb-4">
                                        <Image
                                            src={item.thumbnail}
                                            width={defaultImageWidth}
                                            height={defaultImageHeight}
                                            alt={"A project image from one of my projects, " + item.name}
                                            className="img-fluid card-img-top project-img"
                                            quality={100}
                                            priority={true}
                                        />
                                        <div className="card-body">
                                            <div className="card-title">
                                                <div className="fs-4">{item.name}</div>
                                            </div>
                                            <div className="card-text">
                                                <div className="text-muted mb-2">{item.description}</div>
                                                {item.links.length > 0 ? (
                                                    <div className="mb-1">
                                                        <span>Links: </span>
                                                        <span>
                                                            {item.links.map((linkItem) => (
                                                                <a
                                                                    href={linkItem.href}
                                                                    target="_blank"
                                                                    className="me-1 link-yellow"
                                                                    rel="noopener noreferrer"
                                                                >
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
                <div className="mt-4">
                    <div className="text-center">
                        <div className="display-5">
                            And <span className="font-highlighted">Much</span> More!
                        </div>
                        <div className="fs-4">
                            Available at my{" "}
                            <a
                                href="https://github.com/stackofsugar?tab=repositories"
                                className="link-elegant"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                GitHub Repository
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

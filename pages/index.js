import Head from "next/head";
import Layout from "components/layout";
import Link from "next/link";

function createMainSectionHeading(title) {
    return (
        <div className="col-12 col-lg-4 mb-3 mb-xl-0">
            <span className="font-heading font-highlighted display-4">{title}</span>
        </div>
    );
}

export default () => {
    const socials = [
        { id: "github", icon: "github", path: "https://github.com/stackofsugar" },
        { id: "linkedin", icon: "linkedin", path: "https://www.linkedin.com/in/christopherdigno" },
        { id: "instagram", icon: "instagram", path: "https://www.instagram.com/drowned.axolotl" },
        { id: "telegram", icon: "telegram", path: "https://t.me/stackofsugar" },
        { id: "orcid", icon: "journals", path: "https://orcid.org/0009-0009-0750-4248" },
        { id: "email", icon: "envelope", path: "mailto:digno.christopher@gmail.com" },
    ];

    const skills = {
        "Programming Languages": ["Python", "Javascript", "PHP", "C++", "C", "Java"],
        "Domain Specific Languages": ["HTML", "CSS", "Markdown", "SQL", "LaTeX"],
        "Web Technologies": ["Laravel 8-10", "Flask", "JWT", "Next.js", "React.js", "Sass/SCSS", "Bootstrap CSS", "Materialize CSS"],
        "Database Technologies": ["MySQL/MariaDB", "Microsoft SQL"],
        "AI/ML Technologies": ["TensorFlow & Keras", "🤗 Transformers", "Scikit-learn", "Pandas"],
    };

    const experience = [
        {
            pos: "Backend Web Developer Intern",
            company: "Bureau of Research and Community Service, Sebelas Maret University",
            date: "July 2022 - June 2023",
            description: `
                Remade the website's content management system and user management system from scratch, including multilevel user management, user blocking,
                WYSIWYG content editor, scalable multi-category content capabilities, and more. Source code is closed and proprietary.
            `,
            stack: ["Laravel (8)", "MySQL", "Bootstrap CSS"],
            links: [
                {
                    text: "Company Website",
                    href: "https://risnov.uns.ac.id/en",
                },
            ],
        },
        {
            pos: "Bootcamp Participant",
            company: "Startup Campus",
            date: "Aug 2022 - Dec 2022",
            description: `
                Participated in a bootcamp program in Ahmad Zaky's Startup Campus Backend Engineer Track funded by The Ministry of Education.
                In the program, I focused on API, databases, deployment, and others.
            `,
            stack: ["Flask", "PostgreSQL", "Docker", "Google Cloud Platform", "React.js"],
            links: [
                {
                    text: "Provider's Website",
                    href: "https://startupcampus.id/",
                },
            ],
        },
        {
            pos: "Vice President",
            company: "Student English Forum, Sebelas Maret University",
            date: "December 2021 - December 2022",
            description: `
                Managed my university's student resources for national and regional English debate and public speaking tournaments. I also trained future
                English debaters with our seniors. Apart from that, we also held community-development events and local competitions.
            `,
            stack: [],
            links: [
                {
                    text: "Organization Instagram account",
                    href: "https://www.instagram.com/sef.11maret/",
                },
            ],
        },
        {
            pos: "President",
            company: "Student Association of Informatics Department, Sebelas Maret University (HIMASTER UNS)",
            date: "January 2022 - December 2022",
            description: `
                Led my student organization to conduct character building events, national seminar, student orientation week, and other events.
                We also partnered with national companies to hold our events.
            `,
            stack: [],
            links: [
                {
                    text: "Organization Instagram account",
                    href: "https://www.instagram.com/himaster.uns/",
                },
                {
                    text: "Organization LinkedIn",
                    href: "https://www.linkedin.com/company/himaster-uns/",
                },
            ],
        },
    ];

    const certification = [
        {
            name: "Duolingo English Test",
            type: "English Proficiency Certificate",
            date: "January 2023 - January 2025",
            description: "Overall score 150 out of 160",
            cert: "https://certs.duolingo.com/ad383f8718d45b21b130fae6a83d926b",
        },
    ];

    const publication = [
        {
            kind: "National Journal Article",
            title: "Pendekatan Deep Learning dan Gradient Boosting dalam Prediksi Harga Properti Airbnb dengan Analisis Sentimen",
            title_lit: "Deep Learning and Gradient Boosting Approaches in Airbnb Property Price Prediction with Sentiment Analysis",
            date: "27 July 2023",
            publisher: "JELIKU (Jurnal Elektronik Ilmu Komputer Udayana)",
            position: "Main Contributor",
            doi: {
                code: "10.24843/jlk.2023.v12.i01.p22",
                link: "https://doi.org/10.24843/jlk.2023.v12.i01.p22",
            },
            link: "https://ojs.unud.ac.id/index.php/JLK/article/view/102724",
        },
    ];

    const coverImageSrc = "images/author.webp";

    return (
        <Layout highlight="home">
            <Head>
                <title>Christopher Digno - Livelong Learner and Explorer</title>
            </Head>

            <div>
                <div className="container mt-0 mt-sm-4 mt-md-5">
                    <div id="top-section">
                        <div className="row">
                            <div className="d-lg-none mb-4 text-center">
                                <img style={{ maxHeight: 300 + "px" }} src={coverImageSrc} className="img-fluid"></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-xl-8 col-lg-8">
                                <div className="row mt-0 mt-xxl-5">
                                    <div className="col-1 d-xl-flex flex-column align-items-center justify-content-center d-none fs-3">
                                        {socials.map((social) => (
                                            <div className="my-1 social-bar-item">
                                                <a href={social.path} target="_blank" rel="noopener noreferrer">
                                                    <i className={"bi bi-" + social.icon}></i>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col">
                                        <div className="row font-heading">
                                            <div className="text-center text-sm-start">
                                                <h1 className="display-5 inherit-font">Hi There!</h1>
                                                <div>
                                                    <h1 className="display-4 inherit-font hide-on-title-break">
                                                        I Am <span className="font-highlighted">Christopher Digno</span>
                                                    </h1>
                                                </div>
                                            </div>
                                            <p className="fs-4 mt-4 d-none d-sm-block">
                                                <span>Machine Learning Novice</span>
                                                <span> | </span>
                                                <span>Fullstack Web Developer</span>
                                                <span> | </span>
                                                <span>Born Leader</span>
                                            </p>
                                            <p className="fs-5 mt-3 text-center text-sm-start">
                                                My name is Christopher <span className="font-highlighted">'Stackofsugar'</span> Digno, a
                                                backend-focused software developer, machine learning novice and a third-year computer science student.
                                                I'm a self-learner who's eager to keep learning things I love about computer science.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mt-0 mt-lg-4 mt-xl-0 d-lg-block d-none ">
                                <img src={coverImageSrc} className="img-fluid"></img>
                            </div>
                        </div>
                        <hr className="d-block d-xl-none" />
                        <div className="row d-block d-xl-none mt-3">
                            <div className="text-center">
                                {socials.map((social) => (
                                    <span className="m-2 m-sm-3 m-md-4 fs-2">
                                        <a className="link-yellow" href={social.path} target="_blank" rel="noopener noreferrer">
                                            <i className={"bi bi-" + social.icon}></i>
                                        </a>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <hr className="d-block d-xl-none" />
                    </div>

                    <div id="main-section">
                        <div className="row mt-section">
                            {createMainSectionHeading("About")}
                            <div className="col paragraph-wrapper-main">
                                <p>
                                    I am a third-year computer science student in Universitas Sebelas Maret, Surakarta, Indonesia. I currently focus
                                    on machine learning, namely in the fields of Natural Language Processing and Deep Neural Network.
                                </p>
                                <p>
                                    I was the president of my student association and the vice president of my University's Student English Forum in
                                    the same year of 2022. I was also recognized by my academic department as the best student of 2022.
                                </p>
                                <p>
                                    This fall semester of 2023, I got accepted in an Indonesian government-funded scholarship program at{" "}
                                    <a href="https://www.upf.edu/" target="_blank" className="link-elegant" rel="noopener noreferrer">
                                        Universitat Pompeu Fabra
                                    </a>{" "}
                                    in Barcelona, Spain. I was also selected to be the Student Representative for my cohort.
                                </p>
                            </div>
                        </div>
                        <div className="row mt-section">
                            {createMainSectionHeading("Tech Stack")}
                            <div className="col">
                                {Object.entries(skills).map(([key, value]) => (
                                    <div className="mb-3">
                                        <div className="d-inline font-highlighted fs-4">{key}</div>
                                        <div className="d-flex flex-row flex-wrap">
                                            {value.map((valItem) => (
                                                <div className="badge-list-item">{valItem}</div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row mt-section">
                            {createMainSectionHeading("Experience")}
                            <div className="col">
                                {experience.map((item) => (
                                    <div className="mb-4">
                                        <div className="fs-3">{item.pos}</div>
                                        <div className="fs-5">{item.company}</div>
                                        <div className="text-muted mb-2">{item.date}</div>
                                        <div className="paragraph-wrapper-main mb-1">
                                            <p>{item.description}</p>
                                        </div>
                                        {item.stack.length > 0 ? (
                                            <div className="d-flex flex-row flex-wrap">
                                                {item.stack.map((stackItem) => (
                                                    <div className="badge-list-item-small">{stackItem}</div>
                                                ))}
                                            </div>
                                        ) : null}
                                        {item.links.length > 0 ? (
                                            <div>
                                                <span>Details: </span>
                                                <span>
                                                    {item.links.map((linkItem) => (
                                                        <a
                                                            className="link-yellow me-1"
                                                            href={linkItem.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <span>{linkItem.text}</span>{" "}
                                                            <small>
                                                                <i className="bi bi-box-arrow-up-right"></i>
                                                            </small>
                                                        </a>
                                                    ))}
                                                </span>
                                            </div>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row mt-section">
                            {createMainSectionHeading("Publication")}
                            <div className="col">
                                {publication.map((item) => (
                                    <div className="mb-3">
                                        <div className="fs-3">{item.kind}</div>
                                        <div className="fs-5 text-muted">{item.position}</div>
                                        <div className="my-2">
                                            <div className="fs-5 fst-italic">{item.title}</div>
                                            <div className="fs-6 fst-italic text-muted">lit. {item.title_lit}</div>
                                        </div>
                                        <div>
                                            Published at {item.date} in {item.publisher}
                                        </div>
                                        <div>
                                            DOI:{" "}
                                            <a href={item.doi.link} target="_blank" rel="noreferrer noopener" className="link-yellow">
                                                {item.doi.code}
                                            </a>
                                        </div>
                                        <a className="button-elegant mt-2" href={item.link} target="_blank" rel="noopener noreferrer">
                                            View in Publisher{" "}
                                            <small>
                                                <i className="bi bi-box-arrow-up-right"></i>
                                            </small>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row mt-section">
                            {createMainSectionHeading("Certification")}
                            <div className="col">
                                {certification.map((item) => (
                                    <div className="mb-3">
                                        <div className="fs-3">{item.name}</div>
                                        <div className="fs-5">{item.type}</div>
                                        <div className="text-muted">{item.date}</div>
                                        <div className="my-2">Description: {item.description}</div>
                                        <a className="button-elegant" href={item.cert} target="_blank" rel="noopener noreferrer">
                                            View Certificate{" "}
                                            <small>
                                                <i className="bi bi-box-arrow-up-right"></i>
                                            </small>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-section">
                        <div className="display-4">
                            <div className="mb-2">
                                <span className="font-highlighted">Heads up!</span>
                            </div>
                            <div>
                                <i class="bi bi-cone-striped"></i>
                            </div>
                            <div className="fs-3">This website is still under construction</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

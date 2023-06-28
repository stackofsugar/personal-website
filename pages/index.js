import Head from "next/head";
import Layout from "components/layout";

export default () => {
    const socials = [
        { id: "github", icon: "github", path: "https://github.com/stackofsugar" },
        { id: "linkedin", icon: "linkedin", path: "https://www.linkedin.com/in/christopherdigno" },
        { id: "instagram", icon: "instagram", path: "https://www.instagram.com/drowned.axolotl" },
        { id: "telegram", icon: "telegram", path: "https://t.me/stackofsugar" },
        { id: "email", icon: "envelope", path: "mailto:digno.christopher@gmail.com" },
    ];

    const coverImageSrc = "images/Me Posing In Front of An MRT Station with An MRT Rolling Stock in Jakarta, Indonesia.jpg";

    return (
        <Layout highlight="home">
            <Head>
                <title>Christopher Digno - Livelong Learner and Explorer</title>
            </Head>

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
                                        <div className="my-1">
                                            <a className="link-yellow" href={social.path} target="_blank">
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
                                            My name is Christopher <span className="font-highlighted">'Stackofsugar'</span> Digno, a backend-focused
                                            software developer, machine learning novice and a third-year computer science student. I'm a self-learner
                                            who's eager to keep learning things I love about computer science.
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
                                    <a className="link-yellow" href={social.path} target="_blank">
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
                        <div className="col-12 col-lg-4 mb-3 mb-xl-0">
                            <span className="font-heading font-highlighted display-4">Professional Summary</span>
                        </div>
                        <div className="col paragraph-wrapper-main">
                            <p>
                                I am a third-year computer science student in Universitas Sebelas Maret, Indonesia. Being a great and contributive
                                software developer is one of my main academic goals. I currently focus on machine learning, namely in the fields of{" "}
                                <strong>Natural Language Processing</strong> and <strong>Deep Neural Network</strong>.
                            </p>
                            <p>
                                Being able to lead is a passion of mine. I was the president of my student association and the vice president of my
                                University's Student English Forum in the same year of 2022. I was also recognized by my academic department as the
                                best student of 2022.
                            </p>
                            <p>
                                This fall semester of 2023, I got accepted in an Indonesian government-funded scholarship program at{" "}
                                <a href="https://www.upf.edu/" target="_blank" className="link-elegant">
                                    Universitat Pompeu Fabra
                                </a>{" "}
                                in Barcelona, Spain. I was also selected to be the Student Representative for my cohort.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-section">
                        <div className="col-12 col-lg-4 mb-3 mb-xl-0">
                            <span className="font-heading font-highlighted display-4">My Skillset</span>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <div className="d-inline font-highlighted fs-4">Programming Languages</div>
                                <div className="d-flex flex-row flex-wrap">
                                    <div className="badge-list-item">Python</div>
                                    <div className="badge-list-item">Javascript</div>
                                    <div className="badge-list-item">PHP</div>
                                    <div className="badge-list-item">C++</div>
                                    <div className="badge-list-item">C</div>
                                    <div className="badge-list-item">Java</div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-inline font-highlighted fs-4">Domain Spesific Languages</div>
                                <div className="d-flex flex-row flex-wrap">
                                    <div className="badge-list-item">HTML</div>
                                    <div className="badge-list-item">CSS</div>
                                    <div className="badge-list-item">Markdown</div>
                                    <div className="badge-list-item">SQL</div>
                                    <div className="badge-list-item">LaTeX</div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-inline font-highlighted fs-4">Web Technologies</div>
                                <div className="d-flex flex-row flex-wrap">
                                    <div className="badge-list-item">Laravel 8-10</div>
                                    <div className="badge-list-item">Flask</div>
                                    <div className="badge-list-item">JWT</div>
                                    <div className="badge-list-item">Next.js</div>
                                    <div className="badge-list-item">React.js</div>
                                    <div className="badge-list-item">Sass/SCSS</div>
                                    <div className="badge-list-item">Bootstrap CSS</div>
                                    <div className="badge-list-item">Materialize CSS</div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-inline font-highlighted fs-4">Database Technologies</div>
                                <div className="d-flex flex-row flex-wrap">
                                    <div className="badge-list-item">MySQL/MariaDB</div>
                                    <div className="badge-list-item">Microsoft SQL</div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-inline font-highlighted fs-4">AI/ML Technologies</div>
                                <div className="d-flex flex-row flex-wrap">
                                    <div className="badge-list-item">TensorFlow & Keras</div>
                                    <div className="badge-list-item">🤗 Transformers</div>
                                    <div className="badge-list-item">Scikit-learn</div>
                                    <div className="badge-list-item">Pandas</div>
                                </div>
                            </div>
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
        </Layout>
    );
};

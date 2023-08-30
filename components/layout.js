import Link from "next/link";
import { motion } from "framer-motion";

export default ({ children, highlight }) => {
    const navItems = [
        { name: "Home", route: "/", id: "home" },
        { name: "My Projects", route: "/projects", id: "projects" },
        { name: "Hire Me", route: "/hire", id: "hire_me" },
        { name: "Blog", route: "/blog", id: "blog" },
    ];

    return (
        <>
            <header className="sticky-top mb-4">
                <nav className="navbar navbar-attop navbar-expand-md navbar-dark bg-dark">
                    <div className="container-lg container-header px-5">
                        <Link className="navbar-brand navbar-brand-logo" href="/">
                            Stackofsugar
                            <span className="navbar-brand-dot">.</span>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-label="Expand navbar"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="navbar-nav ms-auto mb-2 mb-md-0">
                                {navItems.map((navItem) => (
                                    <div className="nav-item">
                                        <Link
                                            className={highlight == navItem.id ? "active nav-link link-elegant" : "nav-link link-elegant"}
                                            href={navItem.route}
                                        >
                                            {navItem.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 25, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                }}
            >
                <main className="mt-3 mb-5">{children}</main>
            </motion.div>
            <footer>
                <hr className="m-0" />
                <div className="my-3">
                    <div className="text-center">
                        <div>
                            Personal Website developed with ❤️ by{" "}
                            <a href="https://github.com/stackofsugar/" target="_blank" rel="noopener noreferrer" className="link-light">
                                <i className="bi bi-github"></i> Stackofsugar
                            </a>
                        </div>
                        <div className="text-secondary">
                            <a
                                href="https://github.com/stackofsugar/personal-website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-secondary"
                            >
                                This project
                            </a>{" "}
                            is licensed under the{" "}
                            <a
                                href="https://choosealicense.com/licenses/gpl-3.0/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-secondary"
                            >
                                GNU GPLv3
                            </a>
                            .
                        </div>
                        <div className="text-secondary">
                            This website uses <strong>umami</strong> for analytics. View their privacy policy{" "}
                            <a href="https://umami.is/privacy" rel="noopener noreferrer" target="_blank" className="link-secondary">
                                here
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

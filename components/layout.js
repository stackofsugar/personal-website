import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default ({ children, highlight }) => {
  const navItems = [
    { name: 'Home', route: '/', id: 'home' },
    { name: 'My Projects', route: '/projects', id: 'projects' },
    { name: 'Hire Me', route: '/hire', id: 'hire_me' },
    { name: 'Blog', route: '/blog', id: 'blog' },
  ];

  const metaTitle = 'Christopher Digno - Livelong Learner and Explorer';
  const metaDescription = "Hi! I'm Christopher Digno and this is my personal website!";

  return (
    <>
      <Head>
        <meta key="og_title" name="og:title" content={metaTitle} />
        <meta key="og_description" name="og:description" content={metaDescription} />

        <meta key="twitter_title" property="twitter:title" content={metaTitle} />
        <meta key="twitter_description" property="twitter:description" content={metaDescription} />

        <meta key="description" name="description" content={metaDescription} />
      </Head>
      <header className="sticky-top mb-4">
        <nav className="navbar navbar-attop navbar-expand-md navbar-dark bg-dark">
          <div className="container-lg container-header px-5">
            <Link className="navbar-brand navbar-brand-logo" href="/">
              Stackofsugar
              <span className="navbar-brand-dot">.</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Expand navbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav ms-auto mb-2 mb-md-0">
                {navItems.map((navItem) => (
                  <div className="nav-item">
                    <Link className={highlight == navItem.id ? 'active nav-link link-elegant' : 'nav-link link-elegant'} href={navItem.route}>
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
          type: 'spring',
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
              Developed with ❤️ and passion{' '}
              <a href="https://github.com/stackofsugar/personal-website" target="_blank" rel="noopener noreferrer" className="link-light">
                <i className="bi bi-github"></i> here
              </a>
              .
            </div>
            <div className="text-secondary">
              I use <strong>umami</strong> for analytics. View their{' '}
              <a href="https://umami.is/privacy" rel="noopener noreferrer" target="_blank" className="link-secondary">
                privacy policy
              </a>
              .
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

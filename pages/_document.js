import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="author" content="Christopher Digno" />
                <meta name="description" content="Hi! I'm Christopher Digno and this is my personal website!" />
                <meta name="color-scheme" content="dark" />

                <meta name="og:image" content="https://www.stackofsugar.com/stackofsugar-social-share.webp" />
                <meta name="og:title" content="Christopher Digno - Livelong Learner and Explorer" />
                <meta name="og:description" content="Hi! I'm Christopher Digno and this is my personal website!" />

                <meta property="twitter:image" content="https://www.stackofsugar.com/stackofsugar-social-share.webp" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Christopher Digno - Livelong Learner and Explorer" />
                <meta property="twitter:description" content="Hi! I'm Christopher Digno and this is my personal website!" />

                <link rel="apple-touch-icon" sizes="144x144" href="https://www.stackofsugar.com/favicon144.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="https://www.stackofsugar.com/favicon114.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="https://www.stackofsugar.com/favicon72.png" />
                <link rel="apple-touch-icon" href="https://www.stackofsugar.com/favicon57.png" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Condensed&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato&display=swap" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                crossOrigin="anonymous"
            ></script>
            <script async defer src="/stats/script.js" data-website-id="9998b4b4-ca0f-49b3-9fc5-b66dc2b13f2f"></script>
        </Html>
    );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="author" content="Christopher Digno" />
                <meta name="color-scheme" content="dark" />

                <meta key="og_image" name="og:image" content="https://www.stackofsugar.com/stackofsugar-social-share.webp" />

                <meta property="twitter:image" content="https://www.stackofsugar.com/stackofsugar-social-share.webp" />
                <meta property="twitter:card" content="summary_large_image" />

                <link rel="apple-touch-icon" sizes="144x144" href="https://www.stackofsugar.com/favicon144.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="https://www.stackofsugar.com/favicon114.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="https://www.stackofsugar.com/favicon72.png" />
                <link rel="apple-touch-icon" href="https://www.stackofsugar.com/favicon57.png" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Condensed&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato&display=swap" />

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark.min.css" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"
                integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa"
                crossorigin="anonymous"
            ></script>
            <script async defer src="/stats/script.js" data-website-id="9998b4b4-ca0f-49b3-9fc5-b66dc2b13f2f"></script>
        </Html>
    );
}

import { getAllPostSlugs } from "lib/posts";

const ROOT_SITE = "https://www.stackofsugar.com";
const pages = ["/", "/projects", "/hire", "/blog"];
const all_blog_slugs = getAllPostSlugs();

function generateSiteMap(posts) {
    return `
        <?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                ${pages
                    .map((item) => {
                        return `
                        <url>
                            <loc>${ROOT_SITE}${item}</loc>
                        </url>
                    `;
                    })
                    .join("")}
                ${all_blog_slugs
                    .map((item) => {
                        return `
                        <url>
                            <loc>${ROOT_SITE}/blog/${item.params.slug}</loc>
                        </url>
                    `;
                    })
                    .join("")}
            </urlset>
`.trim();
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
    const sitemap = generateSiteMap();

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;

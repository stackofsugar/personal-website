import * as matter from "gray-matter";
import * as fs from "fs";
import * as path from "path";

import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeExternalLinks from "rehype-external-links";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeExtractExcerpt from "rehype-extract-excerpt";

const postsDirectory = "pages/blog/_posts/";

export function getBlogPostMapping() {
    const fileNames = fs.readdirSync(postsDirectory);
    var blogPostMapping = [];
    fileNames.map((_filename) => {
        blogPostMapping.push({
            filename: _filename.replace(/\.md$/, ""),
            slug: _filename.replace(/^\d+-/, "").replace(/\.md$/, ""),
        });
    });
    return blogPostMapping;
}

export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(process.cwd() + "/" + postsDirectory);
    return fileNames.map((fileName) => {
        var filename = fileName.replace(/^\d+-/, "");
        return {
            params: {
                slug: filename.replace(/\.md$/, ""),
                rawfilename: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

export async function getPostMetadata(rawfilename) {
    const fullPath = path.join(postsDirectory, `${rawfilename}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedExcerpt = await remark()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeExtractExcerpt, {
            maxLength: 300,
        })
        .use(rehypeStringify)
        .process(matterResult.content);

    const excerpt = processedExcerpt.data;

    return {
        rawfilename,
        ...matterResult.data,
        ...excerpt,
    };
}

export async function getPostData(rawfilename) {
    const fullPath = path.join(postsDirectory, `${rawfilename}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeExternalLinks, {
            rel: ["noreferrer", "noopener"],
            target: "_blank",
        })
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(matterResult.content);

    const processedExcerpt = await remark()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeExtractExcerpt, {
            maxLength: 150,
        })
        .use(rehypeStringify)
        .process(matterResult.content);

    const excerpt = processedExcerpt.data;
    const contentHtml = processedContent.toString();

    return {
        rawfilename,
        contentHtml,
        ...matterResult.data,
        ...excerpt
    };
}

/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        testEnvironment: "test",
    },
};

module.exports = {
    nextConfig,
    async redirects() {
        return [
            {
                source: "/hepa-predict",
                destination: "https://projects.stackofsugar.com/hepa-predict/",
                permanent: true,
            },
            {
                source: "/nina-twee",
                destination: "https://projects.stackofsugar.com/nina-twee/",
                permanent: true,
            },
            {
                source: "/industry-scope",
                destination: "https://projects.stackofsugar.com/industry-scope/",
                permanent: true,
            },
        ];
    },
};

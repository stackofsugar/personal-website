<a name="readme-top"></a>

<div align="center">
    <img src="https://www.stackofsugar.com/images/projects/website.webp" alt="Project hero" height="250"  />
    <h1>My Personal Website</h1>
</div>

<!-- Badges -->
<p align="center">
    <!-- Project Status: Active -->
    <img src="https://img.shields.io/badge/status-active-green?style=for-the-badge&labelColor=black" />
    <!-- License -->
    <a href="https://github.com/stackofsugar/personal-website/blob/main/COPYING">
        <img src="https://img.shields.io/github/license/stackofsugar/personal-website?style=for-the-badge&labelColor=black&color=green" />
    </a>
    <!-- Issues -->
    <a href="https://github.com/stackofsugar/personal-website/issues">
        <img src="https://img.shields.io/github/issues/stackofsugar/personal-website?style=for-the-badge&labelColor=black" />
    </a>
    <!-- PRs -->
    <a href="https://github.com/stackofsugar/personal-website/pulls">
        <img src="https://img.shields.io/github/issues-pr/stackofsugar/personal-website?style=for-the-badge&labelColor=black" />
    </a>
    <!-- Visit Website -->
    <a href="https://stackofsugar.com">
        <img src="https://img.shields.io/badge/Visit%20website-black?style=for-the-badge" />
    </a>
</p>

<p align="center">
    The 2nd iteration of my personal portfolio and blog website.
    <br />
    <a href="https://github.com/stackofsugar/personal-website/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/stackofsugar/personal-website/issues/new/choose">Ask for Help</a>
    ·
    <a href="https://github.com/stackofsugar/personal-website/security/advisories/new">Report a Vulnerability</a>
    <br />
    <a href="[def]">Code of Conduct</a>
</p>

## 📝 Table of Contents

-   [About The Project](#about)
-   [Getting Started](#getting-started)
-   [Deployment](#deployment)
-   [Roadmap](#roadmap)
-   [Author(s)](#authors)
-   [Acknowledgements](#acknowledgements)

## 💭 About The Project <a name="about"></a>

I created this project back in June 2023 to replace my old website (now resides [here][old website]) built in **React**, with a more robust framework, **Next**. I originally created a personal website to showcase my projects as well as being a valuable portfolio and a great learning platform in itself.

My website is divided into few main pages with its own unique purposes, which are:

-   Home/main page: Introducing myself and my social medias, showcasing all of the tech stacks I master, my experiences, publications, and certifications.
-   Projects page: Displaying some of my most cherished projects, along with their own description and links.
-   Hire me page: Branding myself up for potential employers who might be interested in hiring me.
-   Blog page: Still under construction, will be a home to my awesome stories.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Technologies Used

-   Javascript Framework: [Next.js][nextjs]
-   CSS Frameworks / Manipulators: [Bootstrap][bootstrap], [Boostrap Icons][bootstrap icons], [PostCSS][postcss]
-   CSS Preprocessor: [Sass (in SCSS format)][sass]
-   Analytics: [Umami][umami]
-   Miscellaneous: [Framer Motion][framer motion]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🛫 Getting Started <a name="getting-started"></a>

1. First of all, **clone this repository** into your machine.

```sh
# Using terminal/shell
git clone https://github.com/stackofsugar/personal-website.git

# Using GitHub CLI
gh repo clone stackofsugar/personal-website
```

2. Navigate to **repository root folder** in your machine, then **install NPM packages** below.

```sh
npm run install
```

3. After the NPM package installation completed, you can **run the website** on your local machine.

```sh
# Start a development server
npm run dev

# Create an optimized production build
npm run build

# Start a local production server after build
npm run start

# My own script: Create an optimized production
# build and then start a local production server
npm run buildstart
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Deployment <a name="deployment"></a>

If you're interested in deploying this website yourself, you can refer to [the Next.js deployment guide][nextjs deploy guide]. You can choose various ways to deploy this Next.js project, ranging from self-hosting, static deployment, and managed deployment using Vercel, that I personally use to host my website.

You can also click the button below to directly clone and deploy this project via Vercel's direct deployment

<div align="center">

[![Deploy with Vercel](https://vercel.com/button)][vercel direct deploy]

</div>

For reference purposes, this is the setup that I use:

-   Hosting: Managed Next.js hosting with [Vercel][vercel new]
-   Domain name: I found a cheap `.com` domain in [Namecheap][namecheap]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📌 Roadmap <a name="roadmap"></a>

-   [x] Implement core features
-   [x] Implement projects page
-   [x] Implement hire me page
-   [ ] Implement blog features
    -   [x] Add ~~MDX~~ markdown parsing using [Remark][remark]
    -   [x] Implement front matter
    -   [x] Implement static path generations
    -   [ ] Work on styling and workflow enhancement
-   [X] Rewrite README

## 📚 Author(s) <a name="authors"></a>

-   [@stackofsugar][stackofsugar-gh] The Benevolent Dictator

See also a list of [contributors](https://github.com/stackofsugar/personal-website/graphs/contributors) who has participated in this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🎉 Acknowledgements <a name="acknowledgements"></a>

Hats off to these amazing people below who has inspired me on this project:

-   Personal website inspiration: [@michaelrk02's website][michaelrk02], [@drithh's website][drithh]
-   GitHub Community Standards inspiration: [@othneildrew's BEST readme template][best readme template], [@kylelobo's The Documentation Compendium][the doc compendium]
-   Plugins I use along the way: [PurgeCSS][purgecss] for unused CSS rules removal, [Remark][remark] for markdown transformations.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[old website]: https://projects.stackofsugar.com/
[nextjs]: https://nextjs.org/
[bootstrap]: https://getbootstrap.com/
[bootstrap icons]: https://icons.getbootstrap.com/
[postcss]: https://postcss.org/
[sass]: https://sass-lang.com/
[umami]: https://umami.is/
[stackofsugar-gh]: https://github.com/stackofsugar
[michaelrk02]: https://michaelrk02.github.io/
[drithh]: https://www.adriel.bio/
[best readme template]: https://github.com/othneildrew/Best-README-Template
[the doc compendium]: https://github.com/kylelobo/The-Documentation-Compendium
[purgecss]: https://purgecss.com/
[framer motion]: https://www.framer.com/motion/
[remark]: https://github.com/remarkjs/remark
[nextjs deploy guide]: https://nextjs.org/docs/pages/building-your-application/deploying
[vercel new]: https://vercel.com/new
[namecheap]: https://www.namecheap.com/
[vercel direct deploy]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstackofsugar%2Fpersonal-website

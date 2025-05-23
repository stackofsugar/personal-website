import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from 'components/layout';
import { getAllPostSlugs, getPostMetadata } from 'lib/posts';
import { paginate, getAllPost } from 'lib/pagination';

export default ({ allPostMetadata }) => {
  const { page } = useRouter().query;
  const pagination = paginate(allPostMetadata, page);

  const paginationData = pagination.data;
  const paginationPage = pagination.page;

  const metaTitle = "Christopher Digno - Blog";
  const metaDescription = "Welcome to my blog!";

  function setLastPageNumber() {
    try {
      sessionStorage.setItem('last-blog-page', page);
    } catch (error) {}
  }

  return (
    <Layout highlight="blog">
      <Head>
        <title>Blog · Christopher Digno</title>

        <meta key="og_title" name="og:title" content={metaTitle} />
        <meta key="og_description" name="og:description" content={metaDescription} />

        <meta key="twitter_title" property="twitter:title" content={metaTitle} />
        <meta key="twitter_description" property="twitter:description" content={metaDescription} />

        <meta key="description" name="description" content={metaDescription} />
      </Head>
      <div className="container">
        {setLastPageNumber()}
        <div id="top-section">
          <div className="text-center">
            <div className="display-5">Blog Posts</div>
            <div className="fs-4">
              A blank canvas for me to <span className="font-highlighted">express myself</span>.
            </div>
          </div>
          <div className="mt-5">
            {paginationData.map((section) => (
              <div className="mb-2">
                <div>
                  <div className="fs-3 mb-3 text-center fw-bold">{section.sectionYear}</div>
                </div>
                <div className="row justify-content-center">
                  <div className="blogpost-list-root col-xxl-8 col-xl-9 col-lg-10 col-md-11 col-12">
                    {section.posts.map((post) => (
                      <div className="blogpost-list-entry border border-secondary p-3">
                        <Link href={'/blog/' + post.slug} className="link-yellow link-yellow-special">
                          <div className="text-center">
                            <div className="text-secondary">
                              {post.created_at_formatted.string}, {section.sectionYear}
                            </div>
                            <div className="fs-2">
                              <strong>{post.title}</strong>
                            </div>
                            <div>{post.excerpt}</div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {paginationPage.total > 1 ? (
            <div className="mt-5">
              <nav aria-label="Blog Navigation" data-bs-theme="dark">
                <ul className="pagination justify-content-center">
                  <li className={'page-item ' + (Boolean(paginationPage.prev) ? '' : 'disabled')}>
                    <Link
                      className="page-link"
                      aria-label="Previous page"
                      href={'/blog?page=' + (Boolean(paginationPage.prev) ? paginationPage.prev : '1')}
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </Link>
                  </li>
                  {[...Array(paginationPage.total).keys()].map((pageNum) => {
                    {
                      /* idk why putting this ternary directly below doesn't work... */
                    }
                    var activeState = paginationPage.now == pageNum + 1 ? 'active' : '';
                    return (
                      <li className={'page-item ' + activeState}>
                        <Link className="page-link" href={'/blog?page=' + (pageNum + 1)}>
                          {pageNum + 1}
                        </Link>{' '}
                      </li>
                    );
                  })}
                  <li className={'page-item ' + (Boolean(paginationPage.next) ? '' : 'disabled')}>
                    <Link
                      className="page-link"
                      aria-label="Next page"
                      href={'/blog?page=' + (Boolean(paginationPage.next) ? paginationPage.next : '1')}
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostSlugs = getAllPostSlugs();

  const allPostMetadata = await Promise.all(
    allPostSlugs.map(async (item) => {
      const postMetadata = await getPostMetadata(item.params.rawfilename);
      return postMetadata;
    })
  );

  return {
    props: { allPostMetadata },
  };
}


import React from 'react';
import Link from 'gatsby-link';
import css from './post.module.styl'

export default function Template({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div>
      <code>Blog posts..</code>
      {posts.map(({ node: value }) =>
        <div className={css.readMore_text}>
          <div dangerouslySetInnerHTML={{ __html: value.html }} />
        </div>
      )}
      <Link className={css.back_btn} to="/">Back Home</Link>
    </div>
  );
}

export const defaultQuery = graphql`
  query readMoreQuery
  {
    allMarkdownRemark(filter: {fields: {slug: {regex: "/blog/"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          html
          excerpt(pruneLength: 10000)
          internal {
            type
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
 `;
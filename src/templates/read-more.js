
import React from 'react';
import Link from 'gatsby-link';

export default function Template({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  const read = {
    width: '75%',
    margin : '10%',
    border: '1px solid #ccc',
    padding: '2%',
    textAlign : 'center'

  }
  return (
    <div>
      <code>Blog posts</code>
      {posts.map(({ node: value }) =>
        <div style={read}>
          <div dangerouslySetInnerHTML={{ __html: value.html }} />
        </div>
      )}
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
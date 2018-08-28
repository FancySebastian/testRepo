import React from 'react';
import Link from 'gatsby-link';

export default function Template({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div>
      {posts.map(({ node: value }) =>
        <div style={{ margin: '2%' }}>
          <h1>{value.frontmatter.title}</h1>
          <div>
            <code>This is first-post.js</code>
            <div className="img" style={{ width: '50%', float: 'left' }}><img src={value.frontmatter.image} alt="First post image" /></div>
            <p className="content" style={{ width: '50%', float: 'left' }}>{value.excerpt}</p>
            <div style={{ clear: 'both' }} />
          </div>
        </div>
      )}
      <div style={{ margin: '2%' }}>
        <Link to="/second-post">Read 2nd post</Link><br />
        <Link to="/">Back Home</Link>
      </div>
    </div>
  );
}

export const FirstPostQuery = graphql`
  query FirstPostQuery 
  {
    allMarkdownRemark(filter: {frontmatter: {key: {eq: "first-post"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt (pruneLength : 1000000)
          internal {
            type
          }
          frontmatter {
            key
            path
            title
            image
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  } 
     `;
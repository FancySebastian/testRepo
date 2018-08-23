import React from 'react';
import Link from 'gatsby-link';

export default function Template({ data }) {
    const { edges: posts } = data.allMarkdownRemark
    return (
        <div>
            {posts.map(({ node: value }) =>
                <div>
                    <h2>This is first-post.js</h2>
                    <h1>{value.frontmatter.title}</h1>
                    <p>{value.excerpt}</p>
                    <Link to="/second-post">Read 2nd post</Link>
                    <Link to="/">Back Home</Link>
                </div>
            )}
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
          excerpt
          internal {
            type
          }
          frontmatter {
            key
            path
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  } 
     `;
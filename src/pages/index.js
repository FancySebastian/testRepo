import React from 'react';
import Link from 'gatsby-link';

export default function Template({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      <h2>Welcome to my page</h2>
      <ul>
        <li><Link to="/first-post">My first post</Link></li>
        <li><Link to="/second-post">Second post</Link></li>
      </ul>
      <button >  <Link  style={{textDecoration: 'none'}} to="/read-more">Read more -></Link><br /></button>

    </div>
  );
}

export const FirstPostQuery = graphql`
 query indexQuery{   
    
    allMarkdownRemark(limit: 1000) {
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
              image
              date(formatString: "DD MMMM, YYYY")
            }
          }
        }
      }

  }   
    `;

import React from 'react';
import Link from 'gatsby-link';

export default function Template({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      {posts.map(({ node: value }) =>
        <div>
          <h1>{value.frontmatter.title}</h1>
          <p>{value.excerpt}</p>
          <Link to="/post-one">2nd Page</Link>
        </div>
      )}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery{
    
    
      allMarkdownRemark(limit: 1) {
          edges {
            node {
              excerpt
              internal {
                type
              }
              frontmatter {
                path
                title
                date(formatString: "DD MMMM, YYYY")
              }
            }
          }
        }
  
    }  
     `;
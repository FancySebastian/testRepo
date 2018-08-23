
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
          
        </div>
      )}
    </div>
  );
}

export const defaultQuery = graphql`
  query defaultQuery{     
     
    allMarkdownRemark (limit : 1){
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
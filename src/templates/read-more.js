
import React from 'react';
import Link from 'gatsby-link';

export default function Template({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      {posts.map(({ node: value }) =>
        <div>
         
          <h1>{value.frontmatter.title}</h1>
          <p>{value.frontmatter.date}</p>
          <p>{value.frontmatter.description}</p>
          <p>{value.excerpt}</p>
          
        </div>
      )}
    </div>
  );
}

export const defaultQuery = graphql`
  query readMoreQuery{     
     
    allMarkdownRemark (limit :3){
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
            title
            date(formatString: "DD MMMM, YYYY")           
          }
        }
      }
    } 
  
    }  
     `;
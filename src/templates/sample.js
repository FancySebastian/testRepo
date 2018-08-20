import React from 'react';
import Link from 'gatsby-link';

export default function Template({ data }) {
    const { edges: posts } = data.allMarkdownRemark
    return (
        <div>
            {posts.map(({ node: value }) =>
                <div>
                    <h1>Hi! this is page 2</h1>
                    <p>{value.excerpt}</p>
                </div>
            )}
        </div>
    );
}

export const pageQuery = graphql`
  query sampleQuery {
    
    
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
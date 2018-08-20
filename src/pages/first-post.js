import React from 'react';
import Link from 'gatsby-link';

export default function Template({ data }) {
    const { edges: posts } = data.allMarkdownRemark
    return (
        <div>
            <h1>This is page 2</h1>
            {posts.map(({ node: value }) =>
                <div>
                    
                    <p>{value.excerpt}</p>
                    <Link to="/">Back</Link>
                </div>
            )}
        </div>
    );
}

export const FirstPostQuery = graphql`
  query FirstPostQuery {
    
    
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
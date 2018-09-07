import React from 'react';
import Link from 'gatsby-link';
import css from './index.module.styl';

export default function Template({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      <h2 className={css.h2}>Welcome to my blog</h2>
      <div className={css.ul}>
        <Link to="/first-post">My first post</Link>
        <Link to="/second-post">Second post</Link>
      </div>
      <div className={css.clear}/>
     <Link className={css.button}  style={{textDecoration: 'none'}} to="/read-more">Read more &rarr;</Link><br />
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
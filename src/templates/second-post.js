
import React from 'react';
import Link from 'gatsby-link';
import css from './post.module.styl'

export default function Template({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      {posts.map(({ node: value }) =>
        <div style={{ margin: '2%' }}>
          <h1>{value.frontmatter.title}</h1>
          <div>

            <div className={css.text}>
              <img src={value.frontmatter.image} alt="First post image" />
              <p>{value.excerpt}</p>
            </div>

          </div>
        </div>
      )}
      <div style={{ margin: '2%' }}>
        <Link className={css.second_post_btn} style={{marginBottom : '20px'}}to="/first-post">Read first post</Link><br />
        <Link className={css.back_btn} to="/">Back Home</Link>
      </div>
    </div>

  );
}

export const secondpostQuery = graphql`
  query secondpostQuery
  {
    allMarkdownRemark(filter: {frontmatter: {key: {eq: "second-post"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength : 1000000)
          internal {
            type
          }
          frontmatter {
            key
            path
            image
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }  
     `;
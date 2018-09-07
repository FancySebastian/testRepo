import React from 'react';
import Link from 'gatsby-link';
import css from './post.module.styl'

export default function Template({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  const { edges: image } = data.allFile;
  return (
    <div>


      {posts.map(({ node: value }) =>
        <div style={{ margin: '2%' }}>
          {
            value.frontmatter.title &&
            <h1 className = {css.h1}>{value.frontmatter.title}</h1>
          }
          <div className={css.text}  dangerouslySetInnerHTML={{ __html: value.html }} />
        </div>
      )}


      <div>
        <Link className={css.second_post_btn} to="/second-post">Read 2nd post</Link><br />
        <Link className={css.read_more} to="/read-more">Read more &rarr;</Link><br />
        <Link className={css.back_btn} to="/">Back Home</Link>
      </div>

     
    </div>
  );
}

export const FirstPostQuery = graphql`
  query FirstPostQuery 
  {
    allFile(filter: 
      {
        extension: 
        {eq: "jpg"}, 
        dir: {regex: "/img/"},
        relativePath: {regex: "/image/"}}) 
       {
        edges {
          node {
            dir
            publicURL
            relativePath
            absolutePath
          }
        }
        totalCount
        distinct(field: name)
    }
    allMarkdownRemark(filter: {frontmatter: {key: {eq: "first-post"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          html
          excerpt(pruneLength: 1000000)
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
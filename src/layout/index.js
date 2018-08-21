import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'

const Layout = ({ children, data }) => (
    <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'content' },
            ]}
        />
        <h1> {data.site.siteMetadata.title} </h1>
        <div>
            {children()}
        </div>
    </div>
)

Layout.propTypes = {
    children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
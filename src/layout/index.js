// import React from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
// import './index.css'

// const Layout = ({ children, data }) => (
//     <div>
//         <Helmet

//             meta={[
//                 { name: 'description', content: 'Sample' },
//                 { name: 'keywords', content: 'content' },
//             ]}
//         />

//         <div>
//             <h1> {data.site.siteMetadata.title} </h1>
//             {children()}
//         </div>
//     </div>
// )

// Layout.propTypes = {
//     children: PropTypes.func,
// }

// export default Layout

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const BasicLayout = ({ children }) => (
    <div>
        <Helmet title="Gatsby + Netlify CMS" />
        <h1>Hi! Welcome !</h1>
        <div id="children">
            {children()}
        </div>
    </div>
)

BasicLayout.propTypes = {
    children: PropTypes.func,
}

export default BasicLayout
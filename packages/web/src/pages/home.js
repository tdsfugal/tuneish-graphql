import React from "react"
import { Link, graphql } from "gatsby"
// import { withAuthenticator } from "aws-amplify-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

function createLink({ pageName, displayName }) {
  const path = `/${pageName}`
  return (
    <div key={pageName}>
      <Link to={path}>{displayName}</Link>
      <br />
    </div>
  )
}

const HomePage = ({ data }) => {
  const { released, pending } = data.site.siteMetadata.instruments

  console.log(released)
  const instruments = released.reduce((acc, inst) => {
    acc.push(createLink(inst))
    return acc
  }, [])

  if (process.env.GATSBY_FEATURE_FLAG === "pending" && pending) {
    pending.forEach(inst => instruments.push(createLink(inst)))
  }

  return (
    <Layout title={"Tuneish.com"}>
      <SEO title="Home" key="seo" />
      {instruments}
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        instruments {
          released {
            pageName
            displayName
          }
          pending {
            pageName
            displayName
          }
        }
      }
    }
  }
`

export default HomePage
// export default withAuthenticator(HomePage)

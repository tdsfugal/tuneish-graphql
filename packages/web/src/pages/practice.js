import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query PracticePageQuery {
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

function createInstrumentLink({ pageName, displayName }) {
  const path = `/practice/${pageName}`
  return (
    <div key={pageName}>
      <Link to={path}>{displayName}</Link>
      <br />
    </div>
  )
}

const PracticePage = ({ data }) => {
  const { released, pending } = data.site.siteMetadata.instruments

  const instruments = released.reduce((acc, inst) => {
    acc.push(createInstrumentLink(inst))
    return acc
  }, [])

  if (process.env.GATSBY_FEATURE_FLAG === "pending" && pending) {
    pending.forEach(inst => instruments.push(createInstrumentLink(inst)))
  }

  return (
    <Layout title={"Tuneish.com"}>
      <SEO title="Practice Page" key="seo" />
      {instruments}
    </Layout>
  )
}

export default PracticePage

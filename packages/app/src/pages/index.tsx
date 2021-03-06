import React from "react"
import { Link } from "gatsby"
import { Button, H1 } from "@monorepo-ui/ui"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Button>hey button!!</Button>
    <Button>hey button 2 :O!!</Button>
    <H1>H1 yeyyyy</H1>
  </Layout>
)

export default IndexPage

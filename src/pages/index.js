import React, { useState } from "react"
import { Box, Flex, Heading, Text } from "theme-ui"
import jsx from "theme-ui"

import SEO from "../components/seo"
import Layout from "../components/layout/Layout"

const IndexPage = ( props ) => {

  return (
    <Layout>
      <SEO title="Home" />
      <Flex>
        <p>
          This is a pretty lame page without content, so this site is going to chill while I get some ready.
        </p>
      </Flex>
    </Layout>
  )
}

export default IndexPage;
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const DesignIllustration = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "developmentillustration.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 700, quality: 50) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        style={{ maxWidth: 700, margin: "0 auto" }}
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="illustration of pixelize mascot for web design and web development"
      />
    )}
  />
)
export default DesignIllustration

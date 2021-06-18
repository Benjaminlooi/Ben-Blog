/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SocialIcons from "../SocialIcons"
import * as style from "./bio.module.scss"
import BackToHome from "../BackToHome"

const Bio = props => {
  const { showBackToHome } = props

  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          title
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <div className="mb-12">
      <div className="flex">
        <StaticImage
          className={style.bioAvatar}
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../../images/ben_bighead.png"
          width={50}
          height={50}
          quality={95}
          alt="Benjamin Looi profile picture"
        />
        {author?.name && (
          <div>
            <p>
              Written by <strong>{author.name}</strong>{" "}
              {author?.summary || null}
            </p>

            <div style={{ marginLeft: "-0.5rem" }}>
              <SocialIcons />
            </div>
          </div>
        )}
      </div>

      {showBackToHome && (
        <div className="pt-4">
          <BackToHome title={siteTitle} />
        </div>
      )}
    </div>
  )
}

export default Bio

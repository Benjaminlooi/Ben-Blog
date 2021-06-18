/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
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

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
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
            Written by <strong>{author.name}</strong> {author?.summary || null}
          </p>

          <ul className="flex items-center mb-3">
            <a
              className="pr-2 fa-lg"
              href="https://www.facebook.com/benjaminlooi97"
            >
              <FontAwesomeIcon
                style={{ color: "#2196f3" }}
                icon={faFacebookSquare}
              />
            </a>
            <a
              className="p-2 fa-lg"
              href="https://www.instagram.com/benjaminlooi/"
            >
              <FontAwesomeIcon
                style={{ color: "#607d8b" }}
                icon={faInstagram}
              />
            </a>
            <a className="p-2 fa-lg" href="https://github.com/Benjaminlooi">
              <FontAwesomeIcon style={{ color: "#673ab7" }} icon={faGithub} />
            </a>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Bio

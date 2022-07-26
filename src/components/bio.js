/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaLinkedin, FaMedium, FaFile } from "react-icons/fa"

const ICONS = [
  { url: "https://github.com/jeromewu", Icon: FaGithubSquare },
  { url: "https://www.linkedin.com/in/wenchiehwu/", Icon: FaLinkedin },
  { url: "https://medium.com/@jeromewus", Icon: FaMedium },
  { url: "https://jeromewu.github.io/doc/resume.pdf", Icon: FaFile },
]

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
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
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <div className="bio-intro">
        {author?.name && (
          <p>
            Written by <strong>{author.name}</strong>
            <br />
            {` `}
            {author?.summary || null}
          </p>
        )}
        <p className="bio-icons">
          {ICONS.map(({ url, Icon }) => (
            <a
              key={url}
              className="bio-icon"
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon size="1.5em" color="#4f5969" />
            </a>
          ))}
        </p>
      </div>
    </div>
  )
}

export default Bio

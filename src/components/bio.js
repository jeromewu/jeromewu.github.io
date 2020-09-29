/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import {
  FaGithubSquare,
  FaLinkedin,
  FaMedium,
  FaFile,
} from "react-icons/fa"

const ICONS = [
  { url: 'https://github.com/jeromewu', Icon: FaGithubSquare },
  { url: 'https://www.linkedin.com/in/wenchiehwu/', Icon: FaLinkedin },
  { url: 'https://medium.com/@jeromewus', Icon: FaMedium },
  { url: 'https://jeromewu.github.io/doc/resume.pdf', Icon: FaFile },
];

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
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

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      <div className="bio-intro">
        {author?.name && (
          <p>
            Written by <strong>{author.name}</strong><br/>
            {` `}
            {author?.summary || null}
          </p>
        )}
        <p className="bio-icons">
          {ICONS.map(({ url, Icon }) => (
            <a
              className="bio-icon"
              href="https://github.com/jeromewu"
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

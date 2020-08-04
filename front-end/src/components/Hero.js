import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div className="underline"></div>
        <h1>I'm Miguel</h1>
        <h4>freelancer and web developer</h4>
        <Link to="/contact" className="btn">
          contact me
        </Link>
        <SocialLinks />
      </article>
      <Image fluid={fluid} className="hero-img" />

    </div>
  </header>
  )
}

export default Hero

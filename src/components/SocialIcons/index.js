import {
  faGithub,
  // faInstagram,
  faLinkedinIn,
  // faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import * as style from "./socialIcons.module.scss"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

export default function SocialIcons() {
  return (
    <ul className={style.socialIconsRow}>
      {/* <a
        className="p-2 fa-lg"
        href="https://www.instagram.com/benjaminlooi/"
        aria-label="Benjamin Looi's Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} className={style.instagramIcon} />
      </a>

      <a
        className="p-2 fa-lg"
        href="https://twitter.com/benjaminlooi_"
        aria-label="Benjamin Looi's Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} className={style.twitterIcon} />
      </a> */}

      <a
        className="p-2 fa-lg"
        href="https://benjaminlooi.com"
        aria-label="Benjamin Looi's Website"
      >
        <FontAwesomeIcon icon={faGlobe} className={style.websiteIcon} />
      </a>

      <a
        className="p-2 fa-lg"
        href="https://github.com/Benjaminlooi"
        aria-label="Benjamin Looi's Github"
      >
        <FontAwesomeIcon icon={faGithub} className={style.githubIcon} />
      </a>

      <a
        className="p-2 fa-lg"
        href="https://www.linkedin.com/in/benjaminlooi/"
        aria-label="Benjamin Looi's Linked-in"
      >
        <FontAwesomeIcon icon={faLinkedinIn} className={style.linkedinIcon} />
      </a>
    </ul>
  )
}

import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"
import SocialIcons from "../SocialIcons"
import * as style from "./footer.module.scss"

export default function Footer() {
  return (
    <footer>
      <div style={{ marginBottom: "-1em" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2a2135"
            fillOpacity="1"
            d="M0,192L34.3,202.7C68.6,213,137,235,206,229.3C274.3,224,343,192,411,160C480,128,549,96,617,106.7C685.7,117,754,171,823,197.3C891.4,224,960,224,1029,213.3C1097.1,203,1166,181,1234,170.7C1302.9,160,1371,160,1406,160L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className={clsx("text-center", style.footerContent)}>
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-sm p-1">
            <SocialIcons />
          </div>
        </div>

        <div>
          <p>
            Made with
            <FontAwesomeIcon icon={faHeart} />
            ,&nbsp;
            <FontAwesomeIcon icon={faCode} />
            ,&nbsp;& GatsbyJS in Kuala Lumpur
          </p>
          <p>© Benjamin Looi 2021</p>
        </div>
      </div>
    </footer>
  )
}

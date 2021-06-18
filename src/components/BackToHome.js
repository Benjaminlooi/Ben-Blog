import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"

export default function BackToHome(props) {
  const { title } = props

  return (
    <Link className="text-sm font-bold text-indigo-600" to="/">
      <FontAwesomeIcon icon={faArrowAltCircleLeft} className="mr-1" />
      Back to {title} home
    </Link>
  )
}

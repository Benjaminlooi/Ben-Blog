import * as React from "react"
import { Link } from "gatsby"
import Navbar from "../Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons"

const Layout = ({ location, title, children }) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          <Link to="/">{title}</Link>
        </h1>
      </>
    )
  } else {
    header = (
      <Link className="text-sm font-bold" to="/">
        <FontAwesomeIcon icon={faArrowAltCircleLeft} className="mr-1" />
        Back to {title} home
      </Link>
    )
  }

  return (
    <>
      <Navbar />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header text-indigo-600">{header}</header>
        <main>{children}</main>
        <footer className="py-6">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com" className="normal-link">
            Gatsby
          </a>
        </footer>
      </div>
    </>
  )
}

export default Layout

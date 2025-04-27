import * as React from "react"
import { Link } from "gatsby"
import Navbar from "../Navbar"
import Footer from "../Footer"
import BackToHome from "../BackToHome"

const Layout = ({ location, title, children }) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-header">
          <Link to="/">{title}</Link>
        </h1>
      </>
    )
  } else {
    header = <BackToHome title={title} />
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 pt-12 pb-10" data-is-root-path={isRootPath}>
        <header className="mb-12 text-indigo-600">{header}</header>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout

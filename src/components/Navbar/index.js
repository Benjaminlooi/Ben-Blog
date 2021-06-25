import { Link } from "gatsby"
import gsap from "gsap"
import React, { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import * as style from "./navbar.module.scss"
import { StaticImage } from "gatsby-plugin-image"

export default function Navbar() {
  const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false)

  const mobileMenuRef = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))

  useEffect(() => {
    tl.current
      .addLabel("start")
      .fromTo(
        mobileMenuRef.current,
        {
          opacity: 0,
          height: 0,
        },
        {
          opacity: 1,
          height: "auto",
          duration: 0.2,
          ease: "power2.inOut",
        }
      )
      .addLabel("end")
      .reverse()
  }, [])

  useEffect(() => {
    tl.current.reversed(!mobileMenuIsActive)
  }, [mobileMenuIsActive])

  const toggleMobileNavBar = () =>
    mobileMenuIsActive
      ? setMobileMenuIsActive(false)
      : setMobileMenuIsActive(true)

  return (
    <>
      <nav className="bg-white font-nunito">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                onClick={toggleMobileNavBar}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center sm:justify-between">
              <div className="flex-shrink-0 flex items-center">
                <StaticImage
                  className="mr-1"
                  layout="fixed"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  src="../../images/ben_bighead.png"
                  width={50}
                  height={50}
                  quality={95}
                  alt="Benjamin Looi logo"
                />
                <h1 className="color-coolGray text-lg">Benjamin Looi</h1>
              </div>

              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="https://benjaminlooi.dev/"
                    className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-semibold"
                  >
                    Home
                  </a>

                  <a
                    href="https://benjaminlooi.dev/projects"
                    className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-semibold"
                  >
                    Projects
                  </a>

                  <a
                    href="https://benjaminlooi.dev/resume"
                    className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-semibold"
                  >
                    Resume
                  </a>

                  <Link
                    to="/"
                    className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                    activeClassName="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={mobileMenuRef}
          className={clsx("sm:hidden", [style.mobileMenu])}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="https://benjaminlooi.dev"
              className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
            >
              Home
            </a>

            <a
              href="https://benjaminlooi.dev/projects"
              className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
            >
              Projects
            </a>

            <a
              href="https://benjaminlooi.dev/resume"
              className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
            >
              Resume
            </a>

            <Link
              to="/"
              activeClassName="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
              className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
              onClick={() => setMobileMenuIsActive(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

import * as React from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      {/* <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="my-8"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header className="mb-4">
                  <h2 className="font-bold leading-8 font-header text-xl sm:text-2xl md:text-3xl text-blue-600 mt-2">
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small className="font-light">{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <Link
              to={post.fields.slug}
              key={post.fields.slug}
              className="flex flex-col p-4 border rounded-lg h-96"
            >
              {/* Add image */}
              {post.frontmatter.image && (
                <img
                  src={post.frontmatter.image}
                  alt={title}
                  className="mb-4 rounded-lg"
                />
              )}
              <h1 className="text-2xl font-bold mb-2">
                {post.frontmatter.title}
              </h1>
              <small className="font-light">{post.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
                className="overflow-hidden text-ellipsis whitespace-nowrap"
              />
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

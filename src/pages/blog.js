import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">    
               {
                   data.allMdx.nodes.map(node => (
                       <article key={node.id}>
                           <h2>{node.frontmatter.title}</h2>
                           <p>Posted: {node.frontmatter.datePublished}</p>
                           <MDXRenderer>
                               {node.body}
                           </MDXRenderer>
                       </article>
                   )) 
                }
        </Layout>
    )
}

export default BlogPage

export const query = graphql`
    query BlogQuery {
        allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
            nodes {
                frontmatter {
                    datePublished(formatString: "MMMM D, YYYY")
                    slug
                    source
                    title
                }
                id
                body
            }
        }
  }
`

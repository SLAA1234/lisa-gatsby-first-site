import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer  } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
//url with slug, that is, the title with -
const BlogPost = ({ data }) => {  
    return (
     <Layout pageTitle="data.mdx.frontmatter.title">
            <p>{data.mdx.frontmatter.data}</p>
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
        </Layout> 
    )
}


//so need to pass id to this query
export const query = graphql`
  query BlogQueryById ($id: String){
      mdx(id:  {eq: $id}) {
        frontmatter {
          title
          datePublished(formatString: "MMMM D, YYYY")
        }
        body
      }
    }   
` 

export default BlogPost;

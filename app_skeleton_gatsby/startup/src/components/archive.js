import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Archive = () => {
  const data = useStaticQuery(graphql`
    query SiteArchiveQuery {
			  allMarkdownRemark {
					totalCount
					edges {
						node {
							html
							excerpt
							frontmatter {
								title
								slug
								date(formatString: "MMMM DD, YYYY")
							}
						}
					}
				}
			}
  `)

  return (
    <>
			<aside> 
				<h3>Archive</h3>
		{data.SiteArchiveQuery.edges.map(edge => (
			<li> 
				{ edge.node.frontmatter.title }
			</li>
		))}
			</aside>
		</>
	)
}

export default Archive

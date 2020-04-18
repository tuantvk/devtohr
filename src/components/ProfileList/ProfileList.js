import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import { observer, inject } from "mobx-react";
import CardProfile from './CardProfile';

const PostList = inject(`store`)(
  observer(({ store: { filters } }) => {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              sort: {order: DESC, fields: frontmatter___last_updated},
              filter: {
                fileAbsolutePath: {regex: "/index.md$/"}
              }
            ) {
              edges {
                node {
                  frontmatter {
                    full_name
                    path
                    profession
                    skills
                    socials {
                      github
                      linkedin
                      twitter
                    }
                    avatar {
                      childImageSharp {
                        fixed(width: 50) {
                          base64
                          width
                          height
                          src
                          srcSet
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div className="profile-list">
            {data.allMarkdownRemark.edges.map((profile, index) => (
              <CardProfile
                key={index}
                {...profile.node.frontmatter}
              />
            ))}
          </div>
        )}
      />
    )
  })
)

export default PostList;
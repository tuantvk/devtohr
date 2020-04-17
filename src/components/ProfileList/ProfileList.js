import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import CardProfile from './CardProfile';


const PostList = () => {
    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: {order: DESC, fields: frontmatter___last_updated},
        filter: {fileAbsolutePath: {regex: "/index.md$/"}}
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
  `);

    const profiles = data.allMarkdownRemark.edges;
    return (
        <div className="profile-list">
            {profiles.map((profile, index) => (
                <CardProfile
                    key={index}
                    {...profile.node.frontmatter}
                />
            ))}
        </div>
    );
}

export default PostList;
import React from "react";
import { graphql } from "gatsby";
import Layout from '../layout';
import Avatar from '../components/Avatar';
import Label from '../components/Label';
import Skills from '../components/ProfileList/Skills';

const ProfileTemplate = ({
  data: {
    markdownRemark: {
      html,
      frontmatter,
    }
  }
}) => {

  const {
    full_name, excerpt, avatar, porfolio, skills,
    senior_level, phone, email, desigerd_commitment, note,
    location, years_experience, desired_job_title, last_updated,
  } = frontmatter;
  return (
    <Layout>
      <div className="d-flex justify-content-between blog-post-container">
        <div className="col-3 profile-left">
          <Avatar {...{ avatar }} title={full_name} style={{ borderRadius: '6px' }} />
          <p className="profile-excerpt">{excerpt}</p>
          <p className="note">{note}</p>
        </div>
        <div className="col-9">
          <h3>{full_name}</h3>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Label
            label="Porfolio"
            content={porfolio}
          />
          <Label
            label="Seniority level"
            content={senior_level}
          />
          <div className="d-flex">
            <div className="col-6">
              <Label
                label="Phone"
                content={phone}
              />
            </div>
            <div className="col-6">
              <Label
                label="Email"
                content={email}
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="col-6">
              <Label
                label="Desigerd Commitment"
                content={desigerd_commitment}
              />
            </div>
            <div className="col-6">
              <Label
                label="Location"
                content={location}
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="col-6">
              <Label
                label="Years Experience"
                content={years_experience}
              />
            </div>
            <div className="col-6">
              <Label
                label="Desired Job Title"
                content={desired_job_title}
              />
            </div>
          </div>
          <p className="profile-label">Skills</p>
          <Skills {...{ skills }} />
          <div className="last-updated">
            <p>Last updated: {last_updated}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProfileTemplate;

export const pageQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: {path: {eq: $pathSlug}}) {
      html
      frontmatter {
        years_experience
        skills
        profile
        senior_level
        profession
        porfolio
        phone
        location
        last_updated
        full_name
        excerpt
        email
        desired_job_title
        desigerd_commitment
        note
        last_updated
        socials {
          github
          linkedin
          twitter
        }
        avatar {
          childImageSharp {
            fixed(width: 150) {
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
`
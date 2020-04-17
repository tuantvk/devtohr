import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Checkbox from '../../Checkbox';
import Accordion from '../../Accordion';


const Profession = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        group(field: frontmatter___skills) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `);

  const profession = data.allMarkdownRemark.group;
  return (
    <div className="sidebar-item">
      <Accordion title="Profession" defaultValue={true}>
        {profession.map(pro => (
          <Checkbox
            key={pro.tag}
            {...pro}
          />
        ))
        }
      </Accordion>
    </div>
  )
}


export default Profession;
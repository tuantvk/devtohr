import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Checkbox from '../../Checkbox';
import Accordion from '../../Accordion';


const Flatform = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark {
      group(field: frontmatter___flatform) {
        tag: fieldValue
        totalCount
      }
    }
  }
  `);

  const flatform = data.allMarkdownRemark.group;
  return (
    <div className="sidebar-item">
      <Accordion title="Flatform" defaultValue={true}>
        {flatform.map(pro => (
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


export default Flatform;
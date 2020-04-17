import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby";


const Header = () => {
    const [typeCurrent, _setType] = useState(1);

    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          types {
            id
            name
          }
        }
      }
    }
  `);

    const { site: { siteMetadata: { types } } } = data;

    return (
        <div className="header">
            {types.map(type => (
                <a
                    key={type.id}
                    className={type.id === typeCurrent ? "active" : ""}
                    href="#home"
                    onClick={() => _setType(type.id)}
                >
                    {type.name}
                </a>
            ))}
        </div>
    )
}


export default Header;
import React from 'react';
import Img from 'gatsby-image';


const Avatar = ({
    avatar,
    title,
    ...rest
}) => (
        avatar && avatar.childImageSharp ?
            <Img
                fixed={avatar.childImageSharp.fixed}
                title={title}
                alt={title}
                {...rest}
            /> :
            <img src="../../../images/devtohr-icon-square.png" alt="devtohr user default " />
    )


export default Avatar;
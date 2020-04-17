import React from 'react';


const Socials = ({ socials }) => {
    return (
        <div className="card-social">
            {socials && Object.keys(socials).map((social, index) => {
                if (socials[social]) {
                    return (
                        <a key={index} href={`https://${social}.com/${socials[social]}`}>
                            <img
                                src={`.../../../images/${social}.png`}
                                alt={`devtohr user ${social}`}
                            />
                        </a>
                    )
                }
                return null;
            })}
        </div>
    )
}


export default Socials;
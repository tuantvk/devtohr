import React from 'react';


const Label = ({
    label,
    content,
}) => (
        <div className="profile-label-main">
            <p className="profile-label">{label}</p>
            <p className="profile-label-content">{content}</p>
        </div>
    );


export default Label;
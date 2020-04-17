import React, { useState } from 'react';


const Accordion = ({
    title,
    defaultValue,
    children,
}) => {
    const [isOpen, _setOpen] = useState(defaultValue);

    return (
        <div>
            <div onClick={() => _setOpen(prev => !prev)}
                className="accordion-title d-flex justify-content-between align-items-center"
            >
                <h4 className="cursor-pointer">{title}</h4>
                {isOpen ? <p>&#9662;</p> : <p>&#9656;</p>}
            </div>
            {isOpen && children}
        </div>
    );
}


export default Accordion;
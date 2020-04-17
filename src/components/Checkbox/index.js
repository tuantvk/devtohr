import React from 'react';


export default ({
    tag,
    totalCount,
}) => (
        <label className="custom-control custom-checkbox">
            <input htmlFor={tag} type="checkbox" className="custom-control-input" />
            <label htmlFor={tag} className="custom-control-label" aria-hidden="true" />
            <div className="d-flex justify-content-between">
                <span className="custom-control-description">{tag}</span>
                <span className="custom-control-total">{totalCount}</span>
            </div>
        </label>
    );
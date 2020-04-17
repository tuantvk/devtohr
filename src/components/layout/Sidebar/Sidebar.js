import React from 'react';
import Profession from './Profession';
import Flatform from './Flatform';


const Sidebar = () => {

  return (
    <div className="layout-sidebar">
      <div className="content">
        <h4 className="mt-0 mb-0">Filter</h4>
        <Profession />
        <Flatform />
      </div>
    </div>
  )
}


export default Sidebar;
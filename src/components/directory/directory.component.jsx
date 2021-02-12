import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import sections from "../../features";
import "./directory.styles.scss";

const Directory = () => {
  return (
   
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl ={linkUrl}/>
        ))}
      </div>
    
  );
};

export default Directory;

import React from 'react';

import './menu-item.styles.scss';
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  const { t } = useTranslation();
 return(
  <div className={`${size} menu-item`}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{t(title)}</h1>
      <br/>
      <span className='subtitle'> <Link to ="/search"> {t("Apply")}</Link></span>
    </div>
  </div>
 )   
  
};

export default  MenuItem;
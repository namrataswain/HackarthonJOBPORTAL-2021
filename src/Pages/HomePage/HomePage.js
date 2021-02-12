import React from 'react';

import Directory from '../../components/directory/directory.component'
import { useTranslation } from "react-i18next";
 

import './homepage.styles.scss';

const HomePage = () => {
  const { t } = useTranslation();
 return (
  <div className='homepage'>
  <div className="title"> {t("Jobs by category")}</div>
    <Directory />
    <div className="title"> 
    {t("Career Break Women Comeback Jobs")}</div>
  </div>
 )  
  
};

export default HomePage;
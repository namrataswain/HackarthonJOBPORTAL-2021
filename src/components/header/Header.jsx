import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { useTranslation } from "react-i18next";
import './header.styles.scss';

const Header = ({ currentUser }) => {
  const { t, i18n } =  useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  console.log(currentUser);
  return(
  <div className='header  navbar is-fixed-top'>
       
    <div className='options'>
    <Link className='option' to='/myjobs'>
    {t("COVID-19 Update")}
      </Link>
      <Link className='option' to='/'>
    {t("Home")}
      </Link>
    
      <Link className='option' to='/search'>
      {t("Search")}
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          {t("Sign out")}
        </div>
      ) : (
        <Link className='option' to='/signin'>
        {t("Sign In")}  
        </Link>
      )}
      
      {currentUser ? <div className="option">
      <div className="navbar-item has-dropdown is-hoverable">
      <a href ="/" className="navbar-link">
      {t("Employer")}
        </a>
      <div className="navbar-dropdown">
      
      <Link to='/postJob' className="navbar-item">
      {t("Post a Job")} 
      </Link>
      <Link to='/myjobs' className="navbar-item">
      {t("write a message")}
      </Link>
      <hr className="navbar-divider"/>
      <Link className="navbar-item" to="/">
      {t("Report an issue")}
        
      </Link>
    </div>
    </div> 
      </div>
      : null}

      {currentUser ? <div className=" navbar-item has-dropdown is-hoverable">
      <a href ="/" className="navbar-link">
      {t("Employee")}
        </a>
      <div className="navbar-dropdown">
      
      <Link to='/search' className="navbar-item">
      {t("Search")}
      </Link>
      <Link to='/myjobs' className="navbar-item">
      {t("write a message")}  
      </Link>
      <hr className="navbar-divider"/>
      <Link  to ="/" className="navbar-item">
      {t("Report an issue")}
      </Link>
    </div>
    </div>  : null} 
      
      <div className=" languageOption"> 
      <div className="buttons has-addons is-right">
          <button
            value="english"
            className="button is-info is-outlined is-small"
            onClick={() => changeLanguage("hin")}
          >{t("Hindi")}</button>
          <button
            className="button is-primary is-outlined is-small"
            onClick={() => changeLanguage("en")}
          >{t("English")}</button>
        </div>
      
      </div>
            
      

      

    </div>
  </div>
  )
      };

export default Header;
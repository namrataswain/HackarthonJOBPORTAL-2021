import React from "react";
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";

const Myjobs = ({cityName, imageUrl, totalJobs}) => {
  const {t} = useTranslation();
  return (
    <div className="container" >
    <div class="card">
  
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48"  >
            <img src = {`${imageUrl}`} alt={t(cityName)}/>
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{t(cityName)}</p>
          <p class="subtitle is-6">{totalJobs} {t("jobs")}</p>
        </div>
        
      </div>
  
      <div class="content">
      <Link to="/search">
      <button className="button is-success is-small">  {t("Find More")}</button>
      </Link>
      
      </div>
    </div>
  </div>
    </div>
  );
};

export default Myjobs;

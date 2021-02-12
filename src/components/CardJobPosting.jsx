import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CardJobPosting = ({ jobPost }) => {
 
  const { t } = useTranslation();
  return (
    <div>
      <section className="section">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <h1> {t(jobPost.category)} </h1>
              <p>
                <span class="icon-text">
                  <span class="icon">
                    <i class="far fa-building"></i>
                  </span>
                  <span> {jobPost.company}</span>
                </span>
              </p>
              <p>
                <span class="icon-text">
                  <span class="icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  <span>
                   {t(jobPost.location)}
                  </span>
                </span>
              </p>
              <p>
                <span class="icon-text">
                  <span class="icon">
                    <i class="far fa-calendar-alt"></i>
                  </span>
                  <span>{t("Posted on")}: 03 Feb 2021</span>
                </span>
              </p>
              <button class="button is-rounded is-info" >
                <Link to={{pathname: '/applyNow', state : {jobPost : jobPost}}}>{t("Apply")}</Link>
              </button>
              <button class="button is-rounded is-success">{t("share")}</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CardJobPosting;

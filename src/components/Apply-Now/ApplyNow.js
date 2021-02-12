import React from "react";
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom';

const ApplyNow = (jobPost) => {
  
  const job = jobPost.history.location.state.jobPost;
  const {t} = useTranslation();
  return (
    <div className="columns">
      <div className="column is-one-fifth"></div>
      <div className="column is-two-thirds">
        <section className="section">
       
          <div class="card">
          <button className="button is-small is-warning is-rounded"> <Link to="/search">{t("MORE JOBS")}</Link></button>
            <div class="card-content">
              <div class="content">
                <h1> {job.category} </h1>
                
                <p>
                  <span class="icon-text">
                    <span class="icon">
                      <i class="far fa-building"></i>
                    </span>
                    <span>{job.company} </span>
                  </span>
                </p>
                <p>
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </span>
                    <span>
                    {job.address}
                      
                    </span>
                  </span>
                </p>
                <p>
                  <span class="icon-text">
                    <span class="icon">
                      <i class="far fa-calendar-alt"></i>
                    </span>
                    <span>{t("Posted on")} : {job.dateOfPosting} </span>
                  </span>
                </p>
              </div>
              <div class="buttons">
                <button className=" button is-link is-light">
                  <span class="icon-text">
                    <span class="icon">
                    <i class="fas fa-phone"></i>
                    </span>
                    <span> {t("Call Employer")}</span>
                  </span>
                </button>
                <button className=" button is-primary is-light">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fab fa-whatsapp"></i>
                    </span>
                    <span> {t("Whatsapp")}</span>
                  </span>
                </button>
                <button className=" button is-danger is-light">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fas fa-heart"></i>
                    </span>
                    <span> {t("Favourite")} </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <label class="label"> {t("Job Details")}</label>
                <hr class="navbar-divider" />
                <p>
                  <span class="icon-text">
                    <span class="icon">
                    <i class="far fa-calendar-check"></i>
                    </span>
                    <span>  {t("JOB TYPE")}: Full time</span>
                  </span>
                </p>
                <p>
                  <span class="icon-text">
                    <span class="icon">
                      <i class="far fa-building"></i>
                    </span>
                    <span> {t("CATEGORY")} : {job.category}</span>
                  </span>
                </p>
                <p>
                  <span class="icon-text">
                    <span class="icon">
                    <i class="fas fa-rupee-sign"></i>
                    </span>
                    <span>  {t("SALARY RANGE")} : Less than 10000 per month</span>
                  </span>
                </p>
                   
                <p>
                  <span class="icon-text">
                    <span class="icon">
                    <i class="fas fa-comments"></i>
                    </span>
                    <span>  {t("LANGUAGES")} : Hindi, English</span>
                  </span>
                </p>
                <p>
                <span class="icon-text">
                  <span class="icon">
                  <i class="fas fa-venus-mars"></i>
                  </span>
                  <span>   {t("GENDER")} : Any</span>
                </span>
              </p>
              <p>
              <span class="icon-text">
                <span class="icon">
                <i class="far fa-clock"></i>
                </span>
                <span>   {t("TIMINGS")} : Regular day shift</span>
              </span>
            </p>
            <p>
            <span class="icon-text">
              <span class="icon">
              <i class="fas fa-book-reader"></i>
              </span>
              <span>  {t("EXPERIENCE")} : 2-5 Years(Skilled)</span>
            </span>
          </p>
          <p>
          <span class="icon-text">
            <span class="icon">
            <i class="fas fa-comments"></i>
            </span>
            <span>   {t("NO OF VACANY")} : 1</span>
          </span>
        </p>
          
          
        <label class="label">  {t("Perks")}</label>
        
        <hr class="navbar-divider" />
        <p>
          <span class="icon-text">
            <span class="icon">
            <i class="fas fa-hand-point-right"></i>
            </span>
            <span>   {t("Verified Mobile Number")} </span>
          </span>
        </p>
        <p>
          <span class="icon-text">
            <span class="icon">
            <i class="fas fa-hand-point-right"></i>
            </span>
            <span> {t("Competitive Salary")} </span>
          </span>
        </p>
        <p>
          <span class="icon-text">
            <span class="icon">
            <i class="fas fa-hand-point-right"></i>
            </span>
            <span>  {t("Minimum 1 Weekly leave")}</span>
          </span>
        </p>
        <p>
          <span class="icon-text">
            <span class="icon">
            <i class="fas fa-hand-point-right"></i>
            </span>
            <span>  {t("10 Hours work a day")}</span>
          </span>
        </p>
        
              </div>
              
            </div>
          </div>
        </section>
      </div>

      <div className="column is-one-fifth"></div>
    </div>
  );
};

export default ApplyNow;

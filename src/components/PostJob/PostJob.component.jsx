import React from "react";
import { useTranslation } from "react-i18next";
const PostJob = () => {
  const {t} = useTranslation();
  return (
    <div >
    
      <div className="columns">
        
          
        <div className="column is-half">
          <section className="section">
            <div className="title"> {t("POST YOUR JOB")}</div>
            <div class="card">
              <header class="card-header">
                <h1 class="card-header-title">{t("Enter Job details")}</h1>
              </header>
              <div className="card-content">
                <div className="content">
                  <div class="field">
                    <label class="label">{t("Job title")}</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder={t("Job title")}
                      />
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">{t("Salary Range")}</label>
                    <div class="control has-icons-left has-icons-right">
                      <input
                        class="input "
                        type="text"
                        placeholder={t("Approx. salary range")}
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-money-bill-wave"></i>
                      </span>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">{t("Select Category of work")}</label>
                    <div class="control">
                      <div class="select">
                        <select>
                          <option>{t("Select Category of work")} </option>
                          <option>{t("Driver")} </option>
                          <option>{t("Delivery")}</option>
                          <option>{t("Maid")} </option>
                          <option>{t("Tailor")}</option>
                          <option>{t("Construction worker")}</option>
                          <option>{t("Plumber")}</option>
                          <option>{t("Electrician")}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <textarea
                        class="textarea"
                        placeholder={t("Job Description")}
                      ></textarea>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <label class="checkbox">
                        <input type="checkbox" />{t("I agree to the")}{" "}
                        <a href="/">{t("terms and conditions")}</a>
                      </label>
                    </div>
                  </div>

                  <div class="field is-grouped">
                    <div class="control">
                      <button class="button is-link">{t("Submit")}</button>
                    </div>
                    <div class="control">
                      <button class="button is-link is-light">{t("Cancel")}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PostJob;

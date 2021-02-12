import React from 'react'
import { useTranslation } from "react-i18next";
const EmployeeMessage = () => {
  const { t} =  useTranslation();
    return (

        <div >
    
        <div className="columns">
          
            
          <div className="column is-half">
            <section className="section">
              <div className="subtitle"> {t("DID YOU LOSE YOUR JOB DUE TO THIS PANDEMIC ?")}  </div>
              <div class="card">
                <header class="card-header">
                  <h1 class="card-header-title"> {t("WRITE YOUR MESSAGE")} </h1>
                </header>
                <div className="card-content">
                  <div className="content">
                    <div class="field">
                      <label class="label"> {t("Your Name")}</label>
                      <div class="control">
                        <input
                        className="is-link input"
                          class="input"
                          type="text"
                          placeholder={t("Your Name")}
                        />
                      </div>
                    </div>
  
  
  
                    <div class="field">
                      <div class="control">
                        <textarea
                          class="textarea is-link"
                          placeholder= {t("Your message description")}
                        ></textarea>
                      </div>
                    </div>
  
                    <div class="field is-grouped">
                      <div class="control">
                        <button class="button is-link"> {t("Submit")}</button>
                      </div>
                      <div class="control">
                        <button class="button is-link is-light"> {t("Cancel")} </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        </div>
    )
}

export default EmployeeMessage;

import React from 'react'
import { useTranslation } from 'react-i18next/';
import CardJobPosting from "./CardJobPosting";



const Cardlist = ({jobPosts}) => {
    const {t} = useTranslation();
    return (
        <div>
        <section class="section ">
        <h1 class="title"> {t("All available jobs")}</h1>
        {
        jobPosts.map(jobPost => (
             <CardJobPosting key={jobPost._id} jobPost ={jobPost} />
           ))
       } 
      </section>
      
        </div>
    )
}

export default Cardlist;

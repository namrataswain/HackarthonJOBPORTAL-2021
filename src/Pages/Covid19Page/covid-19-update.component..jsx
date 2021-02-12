import React from 'react'
import Myjobs from '../../components/Myjobs';
import CITY_DATA from '../../dummyData/cities.data.js';
import EmployeeMessage from '../../components/employee-message/employee-message.component'
import { useTranslation } from "react-i18next";

 
const MyjobsPage = () => {
    const { t} =  useTranslation();
    return (
        <div className="">
        <div className="title">  {t("JOBS NEAR ME")}</div>
        <div className="columns">
        {CITY_DATA.map(({id, cityName, imageUrl, totalJobs}) =>(
            <div className="column">
            <Myjobs key={id} cityName={cityName} imageUrl={ imageUrl} totalJobs={totalJobs} />
            </div>
            
        )) }
        </div>
        
        <EmployeeMessage/>
        </div>

    )
}
   
export default MyjobsPage;


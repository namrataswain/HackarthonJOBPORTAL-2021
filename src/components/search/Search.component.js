import React, { useState } from "react";
import Cardlist from "../Cardlist";
import jobposts from '../../generated';
import { useTranslation } from "react-i18next";

const Search = ({jobPosts}) => {
  const[allJobs] = useState(jobposts);
  const[filtteredJobs, setFiltteredJobs] = useState(jobposts);
  
  const handleChange = (event) => {
		const tempjobPosts = allJobs.filter((item) => {
			return (
				item.location.toLowerCase().indexOf(event.toLowerCase()) > -1 ||
				item.category.toLowerCase().indexOf(event.toLowerCase()) > -1 
			);
		});
		setFiltteredJobs(tempjobPosts);
	};
 
   const {t} = useTranslation();
  return (
    <div class="columns">
   
      <div class="column"> </div>
      <div class="column is-four-fifths">
        <div class="container" fluid>
        <section className='Section'   style={{ paddingTop: '100px'}}>
        </section>
          <input
            type="text"
            className="input is-rounded is-info"
            placeholder={t("Search a job by location or by category...")}
            onChange={(e) => handleChange(e.target.value)}
          />
          <Cardlist jobPosts={filtteredJobs} />
        </div>
      
      </div>

      <div class="column"></div>
      
    </div>
  );
};

export default Search;

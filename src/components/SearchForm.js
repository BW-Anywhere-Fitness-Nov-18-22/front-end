import React, { useState, useEffect } from "react";
import ClientClassCard from './client/ClientClassCard';
import withAuth from "../axios";

export default function SearchForm() {

  const [currentForm, changeForm] = useState('');
  const [searchResult, submitResult] = useState([]);

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://bw4-anywhere-fitness.herokuapp.com"
      : "http://localhost:4000";

  useEffect(() => {
    withAuth()
      .get(baseUrl + "/api/client/reservations")

      .then(res => {
        console.log(res.data);
        const iclasses = res.data;
        const results = iclasses.filter(iclass => {
          return iclass.type.toLowerCase().includes(currentForm.toLowerCase());

        })
        submitResult(results);
      })
      .catch(err => {
        console.log(err);
      })
  }, [currentForm]);

  const onFormChange = event => {
    changeForm(event.target.value);
    console.log(currentForm);
  }
 
  return (
    <section className="search-form">
    <h2>Search:</h2>
     <form>
        <input
          type='text'
          placeholder='Search'
          onChange={onFormChange}
        />
        {
          searchResult.map((iclass, index) => {
            return (
              <ClientClassCard key={index} iclass={iclass} />
            )
          })
        }
    </form>
    <br/>
    <br/>
    </section>
  );
}



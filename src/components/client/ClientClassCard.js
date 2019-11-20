import React, { useState, useEffect } from "react";
import axios from "axios";
import withAuth from "../../axios";

function ClientClassCard() {
  function signUpAlert() { alert("FitnessClass/id Added"); }
  const [iClasses, setiClasses] = useState([]);

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://bw4-anywhere-fitness.herokuapp.com/"
      : "http://localhost:4000";

  useEffect(() => {
    withAuth()
      .get(baseUrl + "/api/class")
      .then(response => {
        setiClasses(response.data);
      })
      .catch(error => {});
  });

  return (
    <div>
      {iClasses.map(iClass => {
        return (
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex flex-row justify-content-between">
                <h5 className="card-title">Fitness Class</h5>
                <p>{iClass.type}</p>
                <p>{iClass.location}</p>
              </div>
              <p className="card-text">
                <span className="text-warning">{iClass.startTime}</span>
              </p>
              <h6 className="card-subtitle mb-2 text-info">
                {iClass.intensityLevel}
              </h6>
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content
              </p> */}
              <div className="d-flex flex-row justify-content-between">
                <p className="text-primary">
                  {iClass.registeredAttendees}/{iClass.maxClassSize}
                </p>
                <a href="#" className="btn btn-success" onClick={signUpAlert}>
                  Sign up
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ClientClassCard;

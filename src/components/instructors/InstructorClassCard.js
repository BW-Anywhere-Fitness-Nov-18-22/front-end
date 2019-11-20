import React, { useState, useEffect } from "react";
import withAuth from "../../axios";

function InstructorClassCard() {
  const [iClasses, setiClasses] = useState([]);

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://bw4-anywhere-fitness.herokuapp.com/"
      : "http://localhost:4000";

  useEffect(() => {
    withAuth()
      .get(baseUrl + "/api/instructor/class")
      .then(response => {
        setiClasses(response.data);
      })
      .catch(error => {});
  }, [iClasses]);

  function deleteClass(classID) {
    withAuth().delete(baseUrl + '/api/instructor/class/' + classID)
  }

  return (
    <div>
      {iClasses.map(iClass => (
        <div className="card mb-4" key={iClass.id}>
          <div className="card-body">
            <div className="d-flex flex-row justify-content-between">
              <h5 className="card-title">Fitness Class</h5>
              <p className="text-capitalize">{iClass.type}</p>
              <p className="text-capitalize">{iClass.location}</p>
            </div>
            <p className="card-text">
              <span className="text-warning">{iClass.startTime}</span>
            </p>
            <h6 className="card-subtitle mb-2 text-info text-capitalize">
              {iClass.intensityLevel}
            </h6>
            {/* <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content
            </p> */}
            <div className="d-flex flex-row justify-content-between">
              <p className="text-primary">
                {iClass.registeredAttendees}/{iClass.maxClassSize}
              </p>
              <div className="text-right">
                <a href="#" className="btn btn-primary mr-2">
                  Edit
                </a>
                <a href="#" className="btn btn-danger" onClick={e => deleteClass(iClass.id)}>
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InstructorClassCard;

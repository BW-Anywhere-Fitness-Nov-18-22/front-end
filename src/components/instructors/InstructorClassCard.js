import React from "react";

function InstructorClassCard() {
  function cancelAlert() { alert("FitnessClass/id Canceled"); }

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="d-flex flex-row justify-content-between">
          <h5 className="card-title">Fitness Class Name</h5>
          <p>Type</p>
          <p>Location</p>
        </div>

        <p className="card-text">
          <span className="text-warning">12:00 - 3:00</span>
        </p>
        <h6 className="card-subtitle mb-2 text-info">Intensity Level</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content
        </p>
        <div className="d-flex flex-row justify-content-between">
          <p className="text-primary">4/8</p>
          <div className="text-right">
            <a href="#" className="btn btn-primary mr-2">
              Edit
            </a>
            <a href="#" className="btn btn-danger" onClick={cancelAlert}>
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorClassCard;

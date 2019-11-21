import React, { useState, useEffect } from "react";
import withAuth from "../../axios";

// Added for modal Edit>>>
import { Container, Modal, ModalBody, ModalHeader } from "reactstrap";
import InstructorsEditClassWFormik from "./InstructorsEditClass";

function InstructorClassCard() {
  const [iClasses, setiClasses] = useState([]);
  //Added for modal edit>>>
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://bw4-anywhere-fitness.herokuapp.com/"
      : "http://localhost:4000";

  useEffect(() => {
    withAuth()
      .get(baseUrl + "/api/instructor/class")
      .then(response => {
        // debugger;
        setiClasses(response.data);
        alert(response.data.message)
      })
      .catch(error => {alert(error)});
  }, [iClasses]);

  function deleteClass(classID) {
    withAuth().delete(baseUrl + "/api/instructor/class/" + classID);
  }

function getCurrentClassdata(id) {
  withAuth().get(baseUrl + "/api/instructor/class")
  .then(response => {
    const editClass = response.data.find(editClass => editClass.id == id);
    console.log(editClass);
    
  }).catch(error => {
    
  })
  toggle()
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
                {/* // Edit class modal>>> */}
              
                  <a href="#" className="btn btn-primary mr-2" onClick={() => getCurrentClassdata(iClass.id)}>
                    Edit
                  </a>
                  <Modal fade={false} isOpen={modal} toggle={toggle}>
                    <ModalHeader>Edit Class</ModalHeader>
                      <ModalBody>
                        <InstructorsEditClassWFormik toggle={toggle} />
                      </ModalBody>
                  </Modal>
                  <a
                    href="#"
                    className="btn btn-danger"
                    onClick={e => deleteClass(iClass.id)}
                  >
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

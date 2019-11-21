import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import RescheduleClassWFormik from "./RescheduleClass";
import withAuth from "../../axios";

function ClientClassEditCard() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [regClasses, setRegClasses] = useState([]);

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://bw4-anywhere-fitness.herokuapp.com/"
      : "http://localhost:4000";

  useEffect(() => {
    withAuth()
      .get(baseUrl + "/api/client/reservations")
      .then(response => response.json)
      .then(json => {
        if (json) {
          setRegClasses(json);
        } else {
          throw new Error(`Bad Response: ${json}`);
        }
      })
      .catch(error => console.log(error));
  }, [baseUrl, regClasses]);

  function delReservation(classId) {
    withAuth()
      .delete(baseUrl + "/api/client/reservations/" + classId)
      .then(response => {
        alert(response.data.message)
      })
      .catch(error => {alert(error)});
  }

  return (
    <div>
      {regClasses.map(regClass => {
        return (
          <div className="card mb-4" key={regClass.classId}>
            <div className="card-body">
              <div className="d-flex flex-row justify-content-between">
                <h5 className="card-title">Fitness Class Name</h5>
                <p>{regClass.type}</p>
                <p>{regClass.location}</p>
              </div>

              <p className="card-text">
                <span className="text-warning">{regClass.startTime}</span>
              </p>
              <h6 className="card-subtitle mb-2 text-info">
                {regClass.intensityLevel}
              </h6>
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content
              </p> */}
              <div className="d-flex flex-row justify-content-between">
                <p className="text-primary">
                  {regClass.registeredAttendees}/{regClass.maxClassSize}
                </p>
                <div className="text-right">
                  <a
                    href="#"
                    className="btn btn-danger"
                    onClick={e => delReservation(regClass.classId)}
                  >
                    Cancel Reservation
                  </a>
                </div>
              </div>
            </div>

            <Modal fade={false} isOpen={modal} toggle={toggle}>
              <ModalHeader>Edit your class</ModalHeader>
              <ModalBody>
                <RescheduleClassWFormik />
              </ModalBody>
            </Modal>
          </div>
        );
      })}
    </div>
  );
}

export default ClientClassEditCard;

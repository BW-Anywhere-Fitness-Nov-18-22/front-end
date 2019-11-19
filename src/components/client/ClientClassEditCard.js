import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import RescheduleClassWFormik from "./RescheduleClass";

function ClientClassEditCard() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

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
            <a href="#" className="btn btn-primary mr-2" onClick={toggle}>
              ReSchedule
            </a>
            <a href="#" className="btn btn-danger">
              Cancel
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
}

export default ClientClassEditCard;

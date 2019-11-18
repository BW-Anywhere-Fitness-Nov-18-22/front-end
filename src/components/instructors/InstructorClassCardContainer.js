import React from "react";
import { Container } from "reactstrap";
import InstructorClassCard from "./InstructorClassCard";

function InstructorClassCardContainer() {
  return (
    <Container>
      <div className="text-center">
        <a href="#" className="btn btn-primary mb-3 w-100">
          Add Class
        </a>
      </div>
      <InstructorClassCard />
    </Container>
  );
}

export default InstructorClassCardContainer;

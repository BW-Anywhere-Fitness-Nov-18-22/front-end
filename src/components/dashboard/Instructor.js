import React from "react";
import InstructorClassCardContainer from "../instructors/InstructorClassCardContainer";
import Navigation from "../Header";

function InstructorDashboard() {
  return ( <div>
    <Navigation myClasses={true} logout={true}/>
    <InstructorClassCardContainer />
  </div>
  )
}

export default InstructorDashboard;

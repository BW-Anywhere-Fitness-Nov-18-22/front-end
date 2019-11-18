import React from "react";
import "./App.css";
import ClientClassCardContainer from "./components/client/ClientClassCardContainer";
import InstructorClassCardContainer from "./components/instructors/InstructorClassCardContainer";

function App() {
  return (
    <div>
      <ClientClassCardContainer />
      <InstructorClassCardContainer />
    </div>
  );
}

export default App;

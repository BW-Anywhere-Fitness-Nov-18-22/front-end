import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LoginWFormik from "./components/Login";
import SignUpWFormik from "./components/SignUp";
import ClientDashboard from "./components/dashboard/Client";
import InstructorDashboard from "./components/dashboard/Instructor";
import ClientOverview from "./components/client/ClientOverview";
import InstructorOverview from "./components/instructors/InstructorOverview";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Route
        exact path="/"
        render={props => {
          return <LoginWFormik {...props} />;
        }}
      />

      <Route
        exact path="/register"
        render={props => {
          return <SignUpWFormik {...props} />;
        }}
      />

      <Route
        exact path="/overview/client"
        render={props => {
          return <ClientOverview {...props} />;
        }}
      />

      <Route
        exact path="/overview/instructor"
        render={props => {
          return <InstructorOverview {...props} />;
        }}
      />

      <Route
        exact path="/dashboard/client"
        render={props => {
          return <ClientDashboard {...props} />;
        }}
      />

      <Route
        exact path="/dashboard/instructor"
        render={props => {
          return <InstructorDashboard {...props} />;
        }}
      />
    </div>
  );
}

export default App;

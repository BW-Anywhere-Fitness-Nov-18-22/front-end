import React from "react";
import "./App.css";
import Navigation from "./components/Header";
import { Route } from "react-router-dom";
import LoginWFormik from "./components/Login";
import SignUpWFormik from "./components/SignUp";
import ClientDashboard from "./components/dashboard/Client";
import InstructorDashboard from "./components/dashboard/Instructor";

function App() {
  return (
    <div>
      <Route
        path="/"
        render={props => {
          return <Navigation {...props} />;
        }}
      />

      <Route
        path="/login"
        render={props => {
          return <LoginWFormik {...props} />;
        }}
      />

      <Route
        path="/register"
        render={props => {
          return <SignUpWFormik {...props} />;
        }}
      />

      <Route
        path="/dashboard/client"
        render={props => {
          return <ClientDashboard {...props} />;
        }}
      />

      <Route
        path="/dashboard/instructor"
        render={props => {
          return <InstructorDashboard {...props} />;
        }}
      />
    </div>
  );
}

export default App;

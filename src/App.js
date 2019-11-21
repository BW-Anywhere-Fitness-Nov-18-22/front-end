import React from "react";
import "./App.css";
import Navigation from "./components/Header";
import { Route } from "react-router-dom";
import LoginWFormik from "./components/Login";
import SignUpWFormik from "./components/SignUp";
import ClientDashboard from "./components/dashboard/Client";
import InstructorDashboard from "./components/dashboard/Instructor";
import AFLogoFxn from "./components/AFLogo";
import ClientOverview from "./components/client/ClientOverview";
import InstructorOverview from "./components/instructors/InstructorOverview";

function App() {
  return (
    <div>
      <Navigation />
      <AFLogoFxn />
      <p className="slogan"> FIND FITNESS &ensp; |<span>&emsp; ANYWHERE &ensp;</span> </p>

      <Route
        exact
        path="/"
        render={props => {
          return <SignUpWFormik {...props} />;
        }}
      />

      <Route
        path="/classes"
        render={props => {
          return <LoginWFormik {...props} />;
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
        path="/overview/client"
        render={props => {
          return <ClientOverview {...props} />;
        }}
      />

      <Route
        path="/overview/instructor"
        render={props => {
          return <InstructorOverview {...props} />;
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

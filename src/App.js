import React from "react";
import "./App.css";
import Navigation from "./components/Header";
import { Route } from "react-router-dom";
import LoginWFormik from "./components/Login";
import SignUpWFormik from "./components/SignUp";

function App() {
  return (
    <div>
      <Navigation />

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
    </div>
  );
}

export default App;

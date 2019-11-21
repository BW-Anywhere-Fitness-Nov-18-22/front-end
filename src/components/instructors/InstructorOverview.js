import React from "react";
import Overview from "../Overview";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

export default props => {
  return (
    <>
      <h1>Hello Instructor!</h1>
      <Overview />
      <div className="text-right">
        <Button>
          <NavLink to="/dashboard/instructor" className="nav-link">
            Dashboard
          </NavLink>
        </Button>
      </div>
    </>
  );
};

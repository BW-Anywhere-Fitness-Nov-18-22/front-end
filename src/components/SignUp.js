import React from "react";
import { Button } from "reactstrap";
import { withFormik, Form, Field } from "formik";

function SignUp(props) {
  return (
    <div className="SignUp-Container">
      <Form>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <Field
            className="form-control"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Josemaria"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <Field
            className="form-control"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="DaCosta"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <Field
            className="form-control"
            type="email"
            name="email"
            id="email"
            placeholder="JonDoe@gmail.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <Field
            className="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="$PAssword124"
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="InstructorCode">instructorCode:</label>
                    <Input type="instructorCode" name="instructorCode" id="instructorCode" placeholder="(Instructors Only)" /> */}
        </div>
        <div className="text-right">
          <Button>Submit</Button>
        </div>
      </Form>
    </div>
  );
}

const SignUpWFormik = withFormik({
  mapPropsToValues() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  }
})(SignUp);

export default SignUpWFormik;

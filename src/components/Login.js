import React from "react";
import { Button } from "reactstrap";
import { withFormik, Form, Field } from "formik";

function Login(props) {
    
  return (
    <div className="SignUp-Container">
      <Form>
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
          {/* <label htmlFor="instructorCode">instructorCode:</label>
                    <Field className="form-control" type="instructorCode" name="instructorCode" id="instructorCode" placeholder="(Instructors Only)" /> */}
        </div>
        <div className="text-right">
          <Button>Submit</Button>
        </div>
      </Form>
    </div>
  );
}

const LoginWFormik = withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: ""
    };
  }
})(Login);

export default LoginWFormik;

import React from "react";
import { Button } from "reactstrap";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://bw4-anywhere-fitness.herokuapp.com/"
    : "http://localhost:4000";

function Login(props) {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center">
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
          <Button type="submit" class="dark">Submit</Button>
        </div>
      </Form>
    </div>
    </div>
  );
}

const LoginWFormik = withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: ""
    };
  },

  handleSubmit(values, tools) {
    const payload = {
      email: values.email,
      password: values.password
    };

    axios
      .post(baseUrl + "/api/auth/login", payload)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        const landingUrl =
          response.data.user.role === "client"
            ? "/dashboard/client"
            : "/dashboard/instructor";
        tools.props.history.push(landingUrl);
        alert(response.data.message)
      })
      .catch(error => {
        alert(error);
      });
  }
})(Login);

export default LoginWFormik;

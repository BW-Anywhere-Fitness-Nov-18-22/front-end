import React from "react";
import { Button } from "reactstrap";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import withAuth from "../../axios";

function InstructorsAddClass(props) {
  function addAlert() { alert("FitnessClass/id Added"); }
  return (
    <Form>
      <div className="form-group">
        <label htmlFor="name">Class Name</label>
        <Field
          className="form-control"
          type="text"
          name="className"
          id="name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="type">Class Type</label>
        <Field as="select" name="classType" id="type" className="form-control">
          <option>Yoga</option>
          <option>Spin Class</option>
          <option>Weight Lifting</option>
          <option>Power Lifting</option>
        </Field>
      </div>
      <div className="form-group">
        <label htmlFor="intensity">Intensity Level</label>
        <Field
          as="select"
          className="form-control"
          name="intensityLevel"
          id="intensity"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </Field>
      </div>
      <div className="form-group">
        <label htmlFor="datetime">Start Time</label>
        <Field
          className="form-control"
          type="datetime-local"
          name="startTime"
          id="datetime"
        />
      </div>
      <div className="form-group">
        <label htmlFor="duration">Duration</label>
        <Field
          as="select"
          className="form-control"
          name="duration"
          id="duration"
        >
          <option>30 Minutes</option>
          <option>45 Minutes</option>
          <option>1 Hour</option>
        </Field>
      </div>

      <div className="form-group">
        <label htmlFor="maxClassSize">Max Class Size</label>
        <Field
          className="form-control"
          type="number"
          id="maxClassSize"
          name="maxClassSize"
          min="5"
          max="200"
        />
      </div>

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <Field
          className="form-control"
          type="text"
          name="location"
          id="location"
          placeholder="1234 Main St"
        />
      </div>

      <Button color="success" type="submit" onClick={addAlert}>
        Submit
      </Button>
    </Form>
  );
}

const InstructorsAddClassWFormik = withFormik({
  mapPropsToValues() {
    return {
      className: "",
      classType: "Yoga",
      intensityLevel: "Beginner",
      startTime: "",
      duration: "30 Minutes",
      maxClassSize: "",
      location: ""
    };
  },

  validationSchema: Yup.object().shape({
    className: Yup.string().required("Please enter the class name"),
    classType: Yup.string().required("Select a class type"),
    intensityLevel: Yup.string().required("Select a intensity level")
  }),

  handleSubmit(values, tools) {
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "https://bw4-anywhere-fitness.herokuapp.com/"
        : "http://localhost:4000";
    const payload = {
      type: values.classType,
      date: values.startTime,
      startTime: values.startTime,
      duration: values.duration,
      intensityLevel: values.intensityLevel,
      location: values.location,
      registeredAttendees: 0,
      maxClassSize: values.maxClassSize,
      instructorId: 5 // supposed to come from states or local storage, then send to database
    };
    withAuth()
      .post(baseUrl + "/api/class", payload)
      .then(res => {
        console.log(res.data);
        tools.resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  }
})(InstructorsAddClass);

export default InstructorsAddClassWFormik;

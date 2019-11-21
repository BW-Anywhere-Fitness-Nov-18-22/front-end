import React from "react";
import { Button } from "reactstrap";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import withAuth from "../../axios";

function InstructorsAddClass(props) {
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
        <label htmlFor="description">Description</label>
        <Field
          className="form-control"
          component="textarea"
          rows="4"
          id="description"
          name="description"
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
        <label htmlFor="duration">Duration (in minutes)</label>
        <Field
          type="number"
          className="form-control"
          name="duration"
          id="duration"
          min="1"
        ></Field>
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

      <Button color="success" type="submit">
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
      duration: 1,
      maxClassSize: "",
      location: "",
      description: ""
    };
  },

  validationSchema: Yup.object().shape({
    className: Yup.string().required("Please enter the class name"),
    classType: Yup.string().required("Select a class type"),
    intensityLevel: Yup.string().required("Select a intensity level")
  }),

  handleSubmit(values, tools) {
    const baseUrl = "https://bw4-anywhere-fitness.herokuapp.com";

    const payload = {
      type: values.classType,
      date: values.startTime.slice(0, 10),
      startTime: values.startTime.slice(11, 16),
      duration: values.duration,
      intensityLevel: values.intensityLevel,
      location: values.location,
      maxClassSize: values.maxClassSize,
      description: values.description
    };

    withAuth()
      .post(baseUrl + "/api/instructor/class", payload)
      .then(res => {
        tools.resetForm();
        tools.props.toggle();
      })
      .catch(err => {});
  }
})(InstructorsAddClass);

export default InstructorsAddClassWFormik;

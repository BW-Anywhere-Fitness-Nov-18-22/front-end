import React from "react";
import { Button } from "reactstrap";
import { withFormik, Form, Field } from "formik";

function RescheduleClass(props) {
    
  return (
    <Form>
      <div className="form-group">
        <label htmlFor="datetime">New Date/Time</label>
        <Field type="datetime-local" name="datetime" id="datetime" className="form-control"/>
      </div>
      <Button color="success">Submit</Button>
    </Form>
  );
}

const RescheduleClassWFormik = withFormik({
    mapPropsToValues() {
        return {
            datetime: ""
        }
    } 
})(RescheduleClass)

export default RescheduleClassWFormik;

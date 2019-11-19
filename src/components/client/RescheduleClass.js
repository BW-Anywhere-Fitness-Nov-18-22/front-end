import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function RescheduleClass() {
  return (
    <Form>
      <FormGroup>
        <Label for="datetime">New Time</Label>
        <Input type="datetime-local" name="datetime" id="datetime" />
      </FormGroup>
      <Button color="success">Submit</Button>
    </Form>
  );
}

export default RescheduleClass;

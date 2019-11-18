import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function RescheduleClass() {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleDate">Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleTime">Time</Label>
        <Input
          type="time"
          name="time"
          id="exampleTime"
          placeholder="time placeholder"
        />
      </FormGroup>
      <Button color="success">Submit</Button>
    </Form>
  );
}

export default RescheduleClass;

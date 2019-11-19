import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Container,
  CustomInput
} from "reactstrap";

function InstructorsAddClass() {
  return (
    <Form>
      <FormGroup>
        <Label for="name">Class Name</Label>
        <Input type="text" name="name" id="name" />
      </FormGroup>
      <FormGroup>
        <Label for="type">Class Type</Label>
        <Input type="select" name="type" id="type">
          <option>Yoga</option>
          <option>Spin Class</option>
          <option>Weight Lifting</option>
          <option>Power Lifting</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="intensity">Intensity Level</Label>
        <Input type="select" name="intensity" id="intensity">
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="datetime">Start Time</Label>
        <Input type="datetime-local" name="datetime" id="datetime" />
      </FormGroup>
      <FormGroup>
        <Label for="duration">Duration</Label>
        <div>
          <CustomInput
            type="radio"
            id="duration"
            name="duration"
            label="30 Minutes"
          />
          <CustomInput
            type="radio"
            id="duration2"
            name="duration"
            label="45 Minutes"
          />
          <CustomInput
            type="radio"
            id="duration3"
            name="duration"
            label="1 hour"
          />
        </div>
      </FormGroup>
      <FormGroup>
          <Label for="maxClassSize">Max Class Size</Label>
          <Input type="number" id="maxClassSize" min="5" max="200"/>
      </FormGroup>

      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          type="text"
          name="location"
          id="location"
          placeholder="1234 Main St"
        />
      </FormGroup>
      
      <Button color="success">Submit</Button>
    </Form>
  );
}

export default InstructorsAddClass;

import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Login(props) {
    return (
        <div className="SignUp-Container">
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email:</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="JonDoe@gmail.com" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password:</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="$PAssword124" />
                </FormGroup>
                <FormGroup>
                    {/* <Label for="instructorCode">instructorCode:</Label>
                    <Input type="instructorCode" name="instructorCode" id="instructorCode" placeholder="(Instructors Only)" /> */}
                </FormGroup>
                <div className="text-right">
                    <Button>Submit</Button>
                </div>
            </Form>
        </div>
    )
}
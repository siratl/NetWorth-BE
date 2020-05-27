import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Auth.css';

function Auth(props) {
  const { sideBarToggle, isSideBarOpen } = props;

  return (
    <div className='mainContainer'>
      <div className='header'>
        <h2>Login</h2>
      </div>

      <Form className='form'>
        <FormGroup>
          <Label for='exampleEmail'>Email</Label>
          <Input
            type='email'
            name='email'
            id='exampleEmail'
            placeholder='email'
          />
        </FormGroup>
        <FormGroup>
          <Label for='examplePassword'>Password</Label>
          <Input
            type='password'
            name='password'
            id='examplePassword'
            placeholder='password'
          />
        </FormGroup>
        <Button color='info' block>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Auth;

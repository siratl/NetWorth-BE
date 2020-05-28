import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Auth.css';

function Auth(props) {
  return (
    <div className='mainContainer'>
      <div className='header'>
        <h2>Login</h2>
      </div>

      <Form className='form'>
        <FormGroup>
          <Label for='emailField'>Email</Label>
          <Input
            type='email'
            name='email'
            id='emailField'
            placeholder='email'
          />
        </FormGroup>
        <FormGroup>
          <Label for='passField'>Password</Label>
          <Input
            type='password'
            name='password'
            id='passField'
            placeholder='password'
          />
        </FormGroup>
        <Button color='info' block>
          Login
        </Button>
      </Form>

      <div className='forgot'>
        <a href='/'>Forgot Password?</a>
        <a href='/'>Sign Up</a>
      </div>
    </div>
  );
}

export default Auth;

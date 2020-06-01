import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';

import {
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBars,
  faPlusCircle,
  faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';

function Bills(props) {
  const { push } = props.history;
  const { sideBarToggle, isSideBarOpen, onChange, date, className } = props;

  // ------------------------------> Modal State <------------------------ //
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // ------------------------------> Form State <------------------------ //
  const [formData, setFormData] = useState({
    billName: '',
    dueDate: '',
    amount: 0,
  });

  const onInputChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='mainContainer'>
      <div className='header'>
        <FontAwesomeIcon id='home' onClick={() => push('/')} icon={faHome} />
        <h2>Bills</h2>
        <FontAwesomeIcon
          id='menu'
          onClick={sideBarToggle}
          icon={isSideBarOpen ? null : faBars}
        />
      </div>

      {/* ----------------------- Totals ------------------ */}
      <div className='totals'>
        <span>
          Total Bills <p>$0</p>
        </span>
        <span>
          Unpaid Bills<p>$0</p>
        </span>
      </div>

      {/* ----------------------- Calendar ------------------ */}
      <div className='calendar'>
        <Calendar calendarType='ISO 8601' onChange={onChange} value={date} />
      </div>

      {/* ----------------------- Add Btn ------------------ */}
      <div className='add'>
        <Button id='add-btn' size='lg' block color='info' onClick={toggle}>
          <FontAwesomeIcon icon={faPlusCircle} /> Add Bill
        </Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>
            <FontAwesomeIcon icon={faMoneyBillWave} /> Add Bill
          </ModalHeader>

          <ModalBody>
            <Form>
              <FormGroup>
                <Label for='inputBillName'>Title</Label>
                <Input
                  onChange={onInputChange}
                  type='text'
                  maxLength='10'
                  name='billName'
                  id='inputBillName'
                  placeholder='Enter Bill'
                />
              </FormGroup>
              <FormGroup>
                <Label for='inputDueDate'>Date</Label>
                <Input
                  onChange={onInputChange}
                  type='date'
                  name='dueDate'
                  id='inputDueDate'
                  value={moment(date).format('YYYY-MM-DD')}
                />
              </FormGroup>

              <FormGroup>
                <Label for='inputAmount'>Amount</Label>
                <Input
                  onChange={onInputChange}
                  type='number'
                  name='amount'
                  id='inputAmount'
                  placeholder='Enter Amount'
                />
              </FormGroup>
              {/* <FormGroup>
                <Label for='exampleSelect'>Select</Label>
                <Input type='select' name='select' id='exampleSelect'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup> */}

              <FormGroup check>
                <Label check>
                  <Input type='checkbox' /> Repeat
                </Label>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={toggle}>
              Submit
            </Button>{' '}
            <Button color='secondary' onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      {/* ------------------------ Table ----------------------------- */}
      <div className='list'>
        <Table striped size='sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Bill</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Internet</td>
              <td>2/May</td>
              <td>$60</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Rent</td>
              <td>15/May</td>
              <td>$200</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>Cell</td>
              <td>18/May</td>
              <td>$40</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Bills;

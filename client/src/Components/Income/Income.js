import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';
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
  CustomInput,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBars,
  faPlusCircle,
  faHandHoldingUsd,
} from '@fortawesome/free-solid-svg-icons';

function Income(props) {
  const { push } = props.history;
  const { sideBarToggle, isSideBarOpen, onChange, date, className } = props;

  // ------------------------------> Modal State <------------------------ //
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // ------------------------------> Form State <------------------------ //
  const [formData, setFormData] = useState({
    incomeType: '',
    date: moment().format('YYYY-MM-DD'),
    amount: 0,
    repeat: false,
    paid: false,
  });

  const onInputChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onCheckboxChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  };

  // --------------------> Bills State <-------------------------------- //
  const [incomeData, setIncomeData] = useState([]);
  useEffect(() => {
    let incomeData = [
      {
        id: 1,
        incomeType: 'Salary',
        date: '2020-04-20',
        amount: 1400,
        repeat: true,
        paid: false,
      },
      {
        id: 2,
        incomeType: 'Freelance',
        date: '2020-04-10',
        amount: 160,
        repeat: true,
        paid: false,
      },
    ];
    setIncomeData(incomeData);
  }, []);

  const addIncome = (event) => {
    // ----------------------------------------> INSERT TRY CATCH HERE
    if (formData.incomeType.length === 0 || formData.amount === 0) {
      return alert('No input!');
    } else {
      formData.amount = Number(formData.amount);
      incomeData.push(formData);
    }
    console.log('This is Data: ', formData.incomeType);
    toggle();
  };

  // ------------------------------> Budget Item Click  <---------------------- //
  const itemClick = (ev) => {
    console.log('I have been clicked');
  };

  return (
    <div className='mainContainer'>
      <div className='header'>
        <FontAwesomeIcon id='home' onClick={() => push('/')} icon={faHome} />
        <h2>Income</h2>
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
        <Calendar calendarType='US' onChange={onChange} value={date} />
      </div>

      {/* ----------------------- Add Btn ------------------ */}
      <div className='add'>
        <Button id='add-btn' size='lg' block color='info' onClick={toggle}>
          <FontAwesomeIcon icon={faPlusCircle} /> Add Income
        </Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>
            <FontAwesomeIcon icon={faHandHoldingUsd} /> Add Income
          </ModalHeader>

          <ModalBody>
            <Form>
              <FormGroup>
                <Label for='inputIncomeType'>Title</Label>
                <Input
                  onChange={onInputChange}
                  type='text'
                  maxLength='20'
                  name='incomeType'
                  id='inputIncomeType'
                  placeholder='Enter Income'
                />
              </FormGroup>
              <FormGroup>
                <Label for='inputDate'>Date</Label>
                <Input
                  onChange={onInputChange}
                  type='date'
                  name='date'
                  id='inputDate'
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

              <FormGroup>
                <Label>
                  <CustomInput
                    type='checkbox'
                    id='inputRepeat'
                    name='repeat'
                    // checked={formData.repeat}
                    onChange={onCheckboxChange}
                  />{' '}
                  <span id='inputRepeatLabel'>Recurring</span>
                </Label>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={addIncome}>
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
        <Table hover size='sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Source</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {incomeData.map((data) => (
              <tr key={data.id} onClick={itemClick}>
                <th scope='row'>{data.id}</th>
                <td>{data.incomeType}</td>
                <td>{moment(data.dueDate).format('YY-MM-DD')}</td>
                <td>${data.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Income;

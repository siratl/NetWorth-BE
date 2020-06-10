import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  CustomInput,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBars,
  faPlusCircle,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';

function Budget(props) {
  const { sideBarToggle, isSideBarOpen, date, className } = props;
  const { push } = props.history;

  // ------------------------------> Modal State <------------------------ //
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // ------------------------------> Form State <------------------------ //
  const [formData, setFormData] = useState({
    name: '',
    date: moment().format('YYYY-MM-DD'),
    amount: 0,
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
  const [budgetsData, setBudgetsData] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/budget').then((res) => {
      console.log(res.data);
      setBudgetsData(res.data);
    });
  }, []);

  const addBudget = (event) => {
    // ----------------------------------------> INSERT TRY CATCH HERE
    if (formData.budgetName.length === 0 || formData.amount === 0) {
      return alert('No input!');
    } else {
      formData.amount = Number(formData.amount);
      budgetsData.push(formData);
    }
    console.log('This is Data: ', formData.budgetName);
    toggle();
  };

  // --------------------------------------> SUM Total <------------------
  let totalBudget = budgetsData.map((num) => {
    return num.amount;
  });
  const sum = totalBudget.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);

  // ------------------------------> Budget Item Click  <---------------------- //
  const itemClick = (ev) => {
    console.log('I have been clicked');
  };

  return (
    <div className='mainContainer'>
      <div className='header'>
        <FontAwesomeIcon id='home' onClick={() => push('/')} icon={faHome} />
        <h2>Budget</h2>
        <FontAwesomeIcon
          id={isSideBarOpen ? 'hidden' : 'menu'}
          onClick={sideBarToggle}
          icon={faBars}
        />
      </div>

      {/* ----------------------- Totals ------------------ */}
      <div className='totals'>
        <span>
          Total Budget{' '}
          <p>${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
        </span>
        <span>
          Total Cash<p>$0</p>
        </span>
      </div>

      {/* ----------------------- Add Btn ------------------ */}
      <div className='add'>
        <Button id='add-btn' size='lg' block color='info' onClick={toggle}>
          <FontAwesomeIcon icon={faPlusCircle} /> Add Budget
        </Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>
            <FontAwesomeIcon icon={faCoins} /> Add Budget
          </ModalHeader>

          <ModalBody>
            <Form>
              <FormGroup>
                <Label for='inputBudgetName'>Title</Label>
                <Input
                  onChange={onInputChange}
                  type='text'
                  maxLength='20'
                  name='budgetName'
                  id='inputBudgetName'
                  placeholder='Enter Budget'
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
            <Button color='primary' onClick={addBudget}>
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
              <th>Budget</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {budgetsData.map((data) => (
              <tr key={data.id} onClick={itemClick}>
                <th scope='row'>{data.id}</th>
                <td>{data.name}</td>
                <td>${data.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Budget;

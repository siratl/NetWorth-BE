import React, { useState, useEffect } from 'react';
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
  faPiggyBank,
} from '@fortawesome/free-solid-svg-icons';

function Bank(props) {
  const { push } = props.history;
  const { sideBarToggle, isSideBarOpen, onChange, date, className } = props;

  // ------------------------------> Modal State <------------------------ //
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // ------------------------------> Form State <------------------------ //
  const [formData, setFormData] = useState({
    cashType: '',
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

  // --------------------> Bank State <-------------------------------- //
  const [cashData, setCashData] = useState([]);
  useEffect(() => {
    let cashData = [
      {
        id: 1,
        cashType: 'Labor',
        date: '2020-04-20',
        amount: 1400,
        repeat: true,
        paid: false,
      },
      {
        id: 2,
        cashType: 'Gift',
        date: '2020-04-10',
        amount: 160,
        repeat: true,
        paid: false,
      },
    ];
    setCashData(cashData);
  }, []);

  const addCash = (event) => {
    // ----------------------------------------> INSERT TRY CATCH HERE
    if (formData.cashType.length === 0 || formData.amount === 0) {
      return alert('No input!');
    } else {
      formData.amount = Number(formData.amount);
      cashData.push(formData);
    }
    console.log('This is Data: ', formData.cashType);
    toggle();
  };

  let totalCash = cashData.map((num) => {
    return num.amount;
  });
  const sum = totalCash.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
  // ------------------------------> Bank Item Click  <---------------------- //
  const itemClick = (ev) => {
    console.log('I have been clicked');
  };

  return (
    <div className='mainContainer'>
      <div className='header'>
        <FontAwesomeIcon id='home' onClick={() => push('/')} icon={faHome} />
        <h2>Bank</h2>
        <FontAwesomeIcon
          id={isSideBarOpen ? 'hidden' : 'menu'}
          onClick={sideBarToggle}
          icon={faBars}
        />
      </div>

      {/* ----------------------- Totals ------------------ */}
      <div className='totals'>
        <span>
          Total Cash{' '}
          <p>${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
        </span>
        <span>
          Unpaid Bills<p>$0</p>
        </span>
      </div>

      {/* ----------------------- Add Btn ------------------ */}
      <div className='add'>
        <Button id='add-btn' size='lg' block color='info' onClick={toggle}>
          <FontAwesomeIcon icon={faPlusCircle} /> Add Cash
        </Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>
            <FontAwesomeIcon icon={faPiggyBank} /> Add Cash
          </ModalHeader>

          <ModalBody>
            <Form>
              <FormGroup>
                <Label for='inputCashType'>Source</Label>
                <Input
                  onChange={onInputChange}
                  type='text'
                  maxLength='20'
                  name='cashType'
                  id='inputCashType'
                  placeholder='Enter Source'
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
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={addCash}>
              Submit
            </Button>{' '}
            <Button color='secondary' onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      {/* ------------------------ Bank Table ----------------------------- */}
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
            {cashData.map((data) => (
              <tr key={data.id} onClick={itemClick}>
                <th scope='row'>{data.id}</th>
                <td>{data.cashType}</td>
                <td>{moment(data.date).format('YY-MM-DD')}</td>
                <td>${data.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Bank;

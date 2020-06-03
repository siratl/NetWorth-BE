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
  faPlus,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

function Investments(props) {
  const { push } = props.history;
  const { sideBarToggle, isSideBarOpen, date, className } = props;

  // ------------------------------> Modal State <------------------------ //
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // ------------------------------> Update Modal State <------------------------ //
  const [modal1, setModal1] = useState(false);

  const toggle1 = () => setModal1(!modal1);

  // ------------------------------> Form State <------------------------ //
  const [formData, setFormData] = useState({
    investmentType: '',
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

  const [formDataUpd, setFormDataUpd] = useState({
    date: moment().format('YYYY-MM-DD'),
    amount: 2500,
  });

  const onInputChangeUpd = (event) => {
    event.preventDefault();
    setFormDataUpd({
      ...formDataUpd,
      [event.target.name]: event.target.value,
    });
  };

  const onCheckboxChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  };

  // --------------------> Investment State <------------------------------- //
  const [investmentData, setInvestmentData] = useState([]);
  useEffect(() => {
    let investmentData = [
      {
        id: 1,
        investmentType: 'Stocks',
        date: '2020-04-20',
        amount: 1400,
      },
      {
        id: 2,
        investmentType: 'Bonds',
        date: '2020-04-10',
        amount: 160,
      },
    ];
    setInvestmentData(investmentData);
  }, []);

  const addInvestment = (event) => {
    // ----------------------------------------> INSERT TRY CATCH HERE
    if (formData.investmentType.length === 0 || formData.amount === 0) {
      return alert('No input!');
    } else {
      formData.amount = Number(formData.amount);
      investmentData.push(formData);
    }
    console.log('This is Data: ', formData.investmentType);
    toggle();
  };
  // ----------------> Update Investment Value State <-------------------- //

  const updateInvestment = (event) => {
    // ----------------------------------------> INSERT TRY CATCH HERE
    formDataUpd.amount = Number(formDataUpd.amount);
    setFormDataUpd(formDataUpd);
    console.log('This Data updated: ', formDataUpd.amount);
    toggle1();
  };

  let val = formDataUpd.amount;

  // ------------------------------> Investment Item Click  <---------------------- //
  const itemClick = (ev) => {
    console.log('I have been clicked');
  };

  // --------------------> Total Growth State <---------------------------- //
  let totalInvested = investmentData.map((num) => {
    return num.amount;
  });
  const sum = totalInvested.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);

  // --------------------> Total Growth <---------------------------- //
  let growth = val - sum;
  const percent = (growth / sum) * 100;

  // --------------------> Render <---------------------------- //
  return (
    <div className='mainContainer'>
      <div className='header'>
        <FontAwesomeIcon id='home' onClick={() => push('/')} icon={faHome} />
        <h2>Investments</h2>
        <FontAwesomeIcon
          id='menu'
          onClick={sideBarToggle}
          icon={isSideBarOpen ? null : faBars}
        />
      </div>

      {/* ----------------------- Totals ------------------ */}
      <div className='totals'>
        <span>
          Investment Value
          <p>${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
        </span>
        <span>
          Total Invested
          <p>${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
        </span>
      </div>

      <div className='growth'>
        <p>Total Growth</p>
        <h2>{Number(percent.toFixed(2))}%</h2>
        {console.log(Number(percent.toFixed(2)))}
      </div>

      {/* ----------------------- Add Btn ------------------ */}
      <div className='add'>
        <Button id='add-btn' size='lg' block color='info' onClick={toggle}>
          <FontAwesomeIcon icon={faPlusCircle} /> Add Investment
        </Button>

        {/* ------------------------ Form Modal ----------------------------- */}
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>
            <FontAwesomeIcon icon={faChartLine} /> Add Investment
          </ModalHeader>

          <ModalBody>
            <Form>
              <FormGroup>
                <Label for='inputInvestmentType'>Title</Label>
                <Input
                  onChange={onInputChange}
                  type='text'
                  maxLength='20'
                  name='investmentType'
                  id='inputInvestmentType'
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
            <Button color='primary' onClick={addInvestment}>
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
              <th>Type</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {investmentData.map((data) => (
              <tr key={data.id} onClick={itemClick}>
                <th scope='row'>{data.id}</th>
                <td>{data.investmentType}</td>
                <td>{moment(data.date).format('YY-MM-DD')}</td>
                <td>${data.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* ----------------------- Add Btn ------------------ */}
      <div className='add'>
        <Button id='add-btn' size='lg' block color='info' onClick={toggle1}>
          <FontAwesomeIcon icon={faPlus} /> Update Investment Value
        </Button>

        {/* --------------------- Update Form Modal ----------------------- */}

        <Modal isOpen={modal1} toggle={toggle1} className={className}>
          <ModalHeader toggle={toggle1}>
            <FontAwesomeIcon icon={faChartLine} /> Update Investment Value
          </ModalHeader>

          <ModalBody>
            <Form>
              <FormGroup>
                <Label for='inputAmount'>Amount</Label>
                <Input
                  onChange={onInputChangeUpd}
                  type='number'
                  name='amount'
                  id='inputAmount'
                  placeholder='Enter Amount'
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={updateInvestment}>
              Submit
            </Button>{' '}
            <Button color='secondary' onClick={toggle1}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default Investments;

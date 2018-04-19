import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import api from './api';

function OfferLoanForm(props) {

  function update(ev) {
    let tgt = $(ev.target);

    let data = {};
    data[tgt.attr('name')] = tgt.val();
    let action = {
      type: 'UPDATE_LOANS_FORM',
      data: data,
    };
    props.dispatch(action);
  }

  function submit(ev) {
    let data = {
    		mini_balance: props.loans_form.mini_balance,
		colletaral: props.loans_form.colletaral,
		accepted: false,
		requestedloan_id: props.re1.id,
		user_id: props.token.user_id
	       };

         let k = parseInt(props.loans_form.mini_balance);
         let l = parseInt(props.loans_form.colletaral);

         if(isNaN(k) || isNaN(l)){
           console.log("inside error dispatch");
           props.dispatch({type: 'ERROR', msg: 'Please enter valid numbers!'});
         }
         else {
    console.log("in submit", data);
    api.new_loans(data);
    props.dispatch({type: 'CLEAR_LOANS_FORM'});
    api.request_loans();
  }
  }

  let loans = _.map(props.requestedloans, (uu) => <option key={uu.id} value={uu.id}>{uu.id}</option>);

  return <div style={{padding: "4ex"}}>
    <h2>Offer Loan</h2>
    <div>Lend loan to:{props.re1.id}</div>
    <FormGroup>
      <Label for="mini_balance">Minimum Balance:</Label>
      <Input type="number" name="mini_balance" value={props.loans_form.mini_balance} onChange={update}/>
    </FormGroup>
    <FormGroup>
      <Label for="colletaral">Colletaral:</Label>
      <Input type="number" name="colletaral" value={props.loans_form.colletaral} onChange={update}/>
    </FormGroup>

    <Button onClick={submit}>Offer Loan</Button>
    <Link to={"/loans"}>Offered Loans</Link>
</div>;


}

function state2props(state) {
  return { loans_form: state.loans_form,
           users: state.users,};
}

export default connect(state2props)(OfferLoanForm);

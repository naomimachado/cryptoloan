import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';


export default function RequestLoanForm(props) {

  let users = _.map(props.users, (uu) => <option key={uu.id} value={uu.id}>{uu.name}</option>);

  return <div style={{padding: "4ex"}}>
    <h2>Request Loan</h2>
    <FormGroup>
      <Label for="user_id">User</Label>
      <Input type="select" name="user_id">
       { users }
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="amount">Request Amount:</Label>
      <Input type="number" name="amount" />
    </FormGroup>

    <Button onClick={() => alert("TODO: Submit Notification")}>Submit</Button>
</div>;


}
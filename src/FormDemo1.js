import React, { Component } from 'react'
import alertify  from 'alertifyjs';
import { FormGroup,Form,Label,Input,Button } from 'reactstrap';

export default class FormDemo1 extends Component {
    state={email:"",password:"", city:"",description:""};
    onChangeHandler=(event)=>{
        //this.setState({userName:event.target.value})
        let name=event.target.name;
        let value=event.target.value;
        this.setState({[name]:value})
    }
    onSubmitHandler=(event)=>{
        event.prevenDefault();
        alertify.success(this.state.email + " added to db!");
    }

    render() {
        return (
           
                
               
                <Form onSubmit={this.onSubmitHandler}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Enter Email" onChange={this.onChangeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="Enter Password" onChange={this.onChangeHandler}  />
      </FormGroup>
      <FormGroup>
        <Label for="description">Text Area</Label>
        <Input type="textarea" name="description" id="description" placeholder="Enter Description" onChange={this.onChangeHandler}/>
      </FormGroup>
      <FormGroup>
        <Label for="city">Select City</Label>
        <Input type="select" name="city" id="city" onChange={this.onChangeHandler}>
          <option>Bursa</option>
          <option>Samsun</option>
          <option>Ankara</option>
          <option>Manisa</option>
          <option>Aydın</option>
        </Input>
      </FormGroup><br/>
      <Button type="submit">Save</Button>
      </Form>
            
        )
    }
}

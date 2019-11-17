import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Boxes from './CommonComponent.jsx';

class MyForm extends React.Component {
constructor(props){
  super(props);
  this.state = {
      name:"",
      value:""
  }
}

onNameChange = (e) =>{
  this.setState({name:e.target.value});
}

onValueChange = (e) =>{
  this.setState({value:e.target.value});
}

restCall = () =>{
  axios.post("users",{body:{"name":this.state.name,"value":this.state.value}}).then((res)=>{
    console.log(res);
  })
}

getValue = () =>{
  axios.get("users").then((res)=>{
    this.setState({data:res.data});
  })
}

  render() {
    return (<div><input type="text" onChange = {this.onNameChange}></input>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./image/background.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./image/background.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./image/background.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <input type="text" onChange={this.onValueChange}></input>
    <button onClick={this.restCall}>click now</button>
    <button onClick={this.getValue}>get Value</button>
    {this.state.data ? this.state.data.map((o)=>{
        return (<div><h1> {o.id} </h1><h1> {o.name} </h1>
        <h1> {o.email} </h1></div>);
      }) : null}

      <Boxes/>
    </div>);
  }
}

export default MyForm

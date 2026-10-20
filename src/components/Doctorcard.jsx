import React,{Component} from 'react'
import "./Home.css"

export default class Doctorcard extends Component {
  state={
    token:localStorage.getItem("token")
  }
  render(){
  return (
    <div className='card'>
      <p>Name:{this.props.name}</p>
      <p>Specialization:{this.props.specialization}</p>
      <p>Gender:{this.props.gender}</p>
      <p>Salary:{this.props.salary}</p>
      <p>Age:{this.props.age}</p>
      {
        this.state.token && (<button onClick={this.props.deleteDoctor}>delete</button>)
      }

    </div>
  )
}}
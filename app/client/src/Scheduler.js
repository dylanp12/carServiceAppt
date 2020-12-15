import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Scheduler extends Component {
    constructor(props){
        super(props);

        this.state = {
            appointmentDate: '',
            name:'',
            time:'',
            email:''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)

        axios
            .post('http://127.0.0.1:3000/appointments', this.state)
            .then(response => {
                console.log(response)
                window.alert("success")
            })
            .catch(error => {
                console.log(error)
            })
        }

   render(){
        const { appointmentDate, name, time, email} = this.state;

       return (
           <div>
               <form onSubmit={this.submitHandler}>
                   <div>
                       <label for="appointmentDate">Date: </label>
                       <input type="date" name="appointmentDate" value={appointmentDate} onChange={this.changeHandler}/>
                   </div>
                   <div>
                        <label for="name">Name: </label>
                       <input type="text" name="name" value={name} onChange={this.changeHandler}/>
                   </div>
                   <div>
                        <label for="email">Email: </label>
                       <input type="text" name="email" value={email} onChange={this.changeHandler}/>
                   </div>
                   <div>
                        <label for="time">Time: </label>
                       <input type="text" name="time" value={time} onChange={this.changeHandler} />
                   </div>
                   <button>Submit </button>
               </form>
           </div>
       )
   }
}

export default Scheduler;
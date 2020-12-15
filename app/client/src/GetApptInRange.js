import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class GetApptInRange extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: [], 
            appointmentDate: '',
            name:'',
            time:'',
            email:'',
            rangeStart: '',
            rangeEnd: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value})
    }


    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)

        axios
            .get('http://127.0.0.1:3000/appointments')
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error => {
                console.log(error)
            })
        }

     

   render(){
        const { appointmentDate, name, time, email, posts, rangeStart, rangeEnd} = this.state;

        let result = posts.filter(function(obj){
            return obj.appointmentDate >= rangeStart && obj.appointmentDate <= rangeEnd;
        });

       return (
           <div>
               <div>
                    <form className="one" onSubmit={this.submitHandler}>
                        <div>
                            <label for="rangeStart">Range Start: </label>
                            <input type="date" name="rangeStart" value={rangeStart} onChange={this.changeHandler}/>
                        </div>
                        <div>
                            <label for="rangeStart">Range End: </label>
                            <input type="date" name="rangeEnd" value={rangeEnd} onChange={this.changeHandler}/>
                        </div>
                        <button>check range</button>
                    </form>
                    <p>
                        appointments:

                        {console.log(posts)}
                        {result.map(res => <div key={res.name}>{res.appointmentDate} {res.name}</div>)}
                        {console.log(result)}

                    </p>
               </div>
           </div>
           
       )
   }
}

export default GetApptInRange;
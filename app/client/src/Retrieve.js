import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class Retrieve extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: [], 
            appointmentDate: '',
            name:'',
            time:'',
            email:'',
            rangeStart: '',
            rangeEnd: '',
            id: null,
            retrieved: []
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value})
    }


    //to 
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)

        const id = this.id

        axios
            .get(`http://127.0.0.1:3000/appointments/${id}`)
            .then(response => {
                console.log(response)
                this.setState({retrieved: response.data})
            })
            .catch(error => {
                console.log(error)
            })
        }

        getListofAppts = e =>{
            //e.preventDefault()
            console.log(this.state)
    
            axios
                .get(`http://127.0.0.1:3000/appointments/`)
                .then(response => {
                    console.log(response)
                    this.setState({posts: response.data})
                })
                .catch(error => {
                    console.log(error)
                })
            }
        componentDidMount(){
            this.getListofAppts()
        }


    

   render(){
        const { appointmentDate, name, time, email, posts, rangeStart, rangeEnd, id, retrieved} = this.state;

       return (
           <div>
               <div>
                    <form className="one" onSubmit={this.submitHandler}>
                        <div>
                            <label for="id">ID: </label>
                            <input type="text" name="id" value={id} onChange={this.changeHandler}/>
                        </div>
                        <p>
                            retrieved: {retrieved}

                        </p>
                        <button>Submit Request</button>
                    </form>
                    <p>
                        Appointments:
                            {
                                posts.map(post => <div key={post.name}>{post._id} {post.appointmentDate} {post.name}</div>)
                            }

                    </p>
               </div>
           </div>
           
       )
   }
}

export default Retrieve;
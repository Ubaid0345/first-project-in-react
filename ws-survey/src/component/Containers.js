import React, { Component } from 'react';
import Detail from './Detail.js';
import Question from './Question.js';
import { v4 as uuidv4 } from 'uuid';
import { get, getDatabase } from "firebase/database";
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyClBsPqjfYFaQ0eQYYiDt2ZXsW-TVHiwV8",
    authDomain: "ws-survey-239f9.firebaseapp.com",
    databaseURL: "https://ws-survey-239f9-default-rtdb.firebaseio.com",
    projectId: "ws-survey-239f9",
    storageBucket: "ws-survey-239f9.appspot.com",
    messagingSenderId: "439404095936",
    appId: "1:439404095936:web:21fc4e0de6a4d0d54cc025"
  };

const app = initializeApp(firebaseConfig);
 

class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:uuidv4(),
            name: null,
            email: null,
            questions :{
                q1:null,
                q2:null,
                q3:null,
                other:null,
            },
            isSubmitted: false
        }
    }

    detailSubmitHandler = (event)=>{
        const name = event.target.name.value;
        const email = event.target.email.value;
        this.setState({name, email}, ()=> console.log(this.state))
        event.preventDefault();
    }    

    questionsSubmitHandler = (event) =>{
        const questions = {};
        questions.q1 = event.target.q1.value;
        questions.q2 = event.target.q2.value;
        questions.q3 = event.target.q3.value;
        questions.other = event.target.other.value;
        const isSubmitted = true;
        this.setState({questions, isSubmitted})
        event.preventDefault();
        const database = getDatabase(app);
        const dbRef = ref(getDatabase())
        get("survey/" + this.state.id).set({
            name : this.state.name,
            email : this.state.email,
            questions : this.state.questions,
        });
    };

    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <div className='container card mt-2'>
                        <h1 className='text-center text-primary'>ws cube tech survey</h1>
                    </div>
                </div>
                {
                    this.state.isSubmitted ? (<div className='card'><h1>thank you</h1> </div> ) : this.state.name === null && this.state.email === null ? (<Detail submit={this.detailSubmitHandler} />) : (<Question submit={this.questionsSubmitHandler} />)
                }
            </div>
        )
    }
}

export default Container

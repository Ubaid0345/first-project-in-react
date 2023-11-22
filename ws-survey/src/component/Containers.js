import React, { Component } from 'react';
import Detail from './Detail.js';
import Question from './Question.js';

class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
        this.setState({name, email})
        event.preventDefault();
    }    

    questionsSubmitHandler = (event) =>{
        const questions = {};
        questions.q1 = event.target.q1.value;
        questions.q2 = event.target.q2.value;
        questions.q3 = event.target.q3.value;
        questions.other = event.target.other.value;
        this.setState({questions})
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <div className='container card mt-2'>
                        <h1 className='text-center text-primary'>ws cube tech survey</h1>
                    </div>
                </div>
                {
                    this.state.name === null && this.state.email === null ? (<Detail submit={this.detailSubmitHandler} />) : (<Question submit={this.questionsSubmitHandler} />)
                }
            </div>
        )
    }
}

export default Container

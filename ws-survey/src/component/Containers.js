import React, { Component } from 'react';
import Detail from './Detail';
import Question from './Question';

class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: null,
            email: null,
            isSubmitted: false
        }
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
                    this.state.name === null && this.state.email === null ? (<Detail />) : (<Question />)
                }
            </div>
        )
    }
}

export default Container

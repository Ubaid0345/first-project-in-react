import React, { Component } from 'react';
import Detail from './Detail';

class Container extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <>
        <div className='container-fluid'>
            <div className='container card mt-2'>
                <h1 className='text-center text-primary'>ws cube tech survey</h1>
            </div>
        </div>
        <Detail />
      </>
    )
  }
}

export default Container

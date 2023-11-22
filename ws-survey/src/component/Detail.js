import React from 'react'

export default function Detail(props) {
  return (
    <div className='container-fluid'>
      <div className='col-md-5 m-auto'>
        <div className='mt-3'>
          <div className='card text-left'>
            <div className='card-body'>
              <form onSubmit={props.submit}>
                <div class="form-group">
                  <label htmlFor="name">{" "} <b>1.</b> Name</label>
                  <input type="text" name='text' class="form-control" placeholder="please Enter your Name" autoComplete='off' required />
                </div>
                <div class="form-group">
                  <label htmlFor="email">{" "} <b>2.</b> Email </label>
                  <input type="email" name='email' class="form-control" placeholder="please enter your email" autoComplete='off' required />
                </div>
                <button type="submit" class="btn btn-primary">Next</button>
                <center>
                  <span className='badge badge-pill badge-primary'>1</span>
                  <span className='badge badge-pill disabled'>2</span>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

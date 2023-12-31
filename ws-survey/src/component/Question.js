import React from 'react'

export default function Question(props) {
  return (
    <div className='container-fluid'>
      <div className='col-md-5 m-auto'>
        <div className='mt-3'>
          <div className='card text-left'>
            <div className='card-body'>
              <form onSubmit={props.submit}>
                <div className='form-group'>
                  <label htmlFor=''>
                    <b>3.</b> what are you currently doing ?
                  </label>
                  <br />
                  <input type='radio' id='teacher' name='q1' value="teacher" autoComplete='off' />
                  <label htmlFor='teacher'>Teaching</label>
                  <input type='radio' id='student' name='q1' value="student" autoComplete='off' />
                  <label htmlFor='student'>Student</label>
                  <input type='radio' id='programmer' name='q1' value="programmer" autoComplete='off' />
                  <label htmlFor='programmer'>Programmer</label>
                  <input type='radio' id='other' name='q1' value="other" autoComplete='off' />
                  <label htmlFor='other'>Other</label>
                  <br />
                  <input type='text' className='form-control' name='other' disabled autoComplete='off' placeholder='typer here if not listed' />
                </div>  
                <div className='form-group'>
                  <label htmlFor=''>{" "}<b>4.</b>Please rate our course </label>
                  <br /> 
                  <input type='radio' id='poor' name='q2' value="poor" autoComplete='off' />
                  <label htmlFor='poor'>Poor</label>{" "}
                  <input type='radio' id='good' name='q2' value="good" autoComplete='off' />
                  <label htmlFor='good'>Good</label>{" "}
                  <input type='radio' id='excellent' name='q2' value="excellent" autoComplete='off' />
                  <label htmlFor='excellent'>Excellent</label>
                </div>
                <div className='form-group'>
                  <label htmlFor=''>{" "} <b>5.</b> write your review here </label>
                  <textarea className='form-control' name='q3'></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Save</button>
              </form>
              <center>
                <span className='badge badge-pill disabled'>1</span>
                <span className='badge badge-pill badge-priamry'>2</span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

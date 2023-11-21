import React from 'react'

export default function Detail() {
  return (
    <div className='container'>
      <form>
  <div class="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" class="form-control" id="exampleText" placeholder="Enter Name" />
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" class="form-control" id="exampleEmail" placeholder="email" />
  </div>
  {/* <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" class="btn btn-primary">Next</button>
</form>
    </div>
  )
}

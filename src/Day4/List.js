import React from 'react'
import './Demo.css'

export default function List() {
  return (
    <div className='mystyle'>
        <h2>Sign Up Project</h2>
        <label >Firstname : </label>
        <input type="text"></input>
        <label>Lastname : </label>
        <input type="text"></input><br></br><br></br>
        <label>UserName : </label>
        <input type='text'></input><br></br><br></br>
        <label>Password : </label>
        <input type='password'></input><br></br><br></br>
        <label>Confirm password : </label>
        <input type="password"></input><br></br><br></br>
        <label>Email : </label>
        <input type="text" placeholder="ex:abcd@gmail.com"></input><br></br><br></br>
        <button>Submit</button>
    
    </div>
  )
}

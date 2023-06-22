import React, { useState } from 'react'
import './App.css'


function App() {
 const [details, setDetails] = useState({
  name: "",
  Age: "",
  Food: "",
  Color: "",
  Motto: "",
 })
 const [submitted, setSubmitted] = useState(false)

 const handleChange = (e) => {
  const key = e.target.name
  const val = e.target.value
  setDetails((prev) => {
   return {...prev, [key]: val}
  })
 }

 const handleSubmit = (e) => {
  e.preventDefault()
 setSubmitted(true)
 }

  return (
    <>
    
    {!submitted ? (
    <div className='div-form'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" >First Name:</label>
      <input className='input' type="text" name="name" onChange={handleChange} /><br/>
      <label htmlFor="age" >Age:</label>
      <input className='input' type="text" name="Age"onChange={handleChange}/><br/>
      <label htmlFor="fav-food" >Favorite Food:</label>
      <input className='input' type="text" name="Food" onChange={handleChange}/><br/>
      <label htmlFor="fav-color" >Favorite Color:</label>
      <input className='input' type="text" name="Color" onChange={handleChange}/><br/>
      <label htmlFor="motto">Motto:</label>
      <textarea className='input' name='motto' rows={6}/><br />
      <button className='submit-btn' type='submit'>Submit</button>
    </form>
    </div>
    ):(
    <div>
        <App />
   <div className='display'>
    <h2>Name:</h2>
    <p>{details.name}</p>
    <h2>Age:</h2>
    <p>{details.Age}</p>
    <h2>Favorite Food:</h2>
    <p>{details.Food}</p>
    <h2>Favorite Color:</h2>
    <p>{details.Color}</p>
    <h2>Motto:</h2>
    <p>{details.Motto}</p>

   </div>
   
   </div>)
   }
   
    </>
  )
}

export default App

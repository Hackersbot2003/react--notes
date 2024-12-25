import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

//for changing state
let [counter,setCounter]  =useState(15)
//setcounter ek method hai jo ki control karega counter ko


//let counter =15

const addValue =()=>{
  console.log("clicked",counter);
  
 counter = counter+1               //UI updation problem
  //what if counter is present in multiple places
  //react decides where to update data ,ui updation ko react control karta hai
  //it have Hooks to solve this problem

  setCounter(counter )
}

const removeValue = ()=>{
  setCounter(counter-1)
}

  return (
    <>
     <h1>chai aur react </h1>
     <h2>counter value :{counter}</h2>
     <button
     onClick={addValue}                          //giving refrence so that when we click it executes
     >add value {counter}</button>
     <br/>
     <button
     onClick={removeValue}
     >remove value {counter }</button>
    </>
  )
}

export default App

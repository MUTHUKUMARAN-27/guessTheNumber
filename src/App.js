
import './App.css';
import { useState } from 'react';
import Result from './result';
const secretno = Math.floor(Math.random()*10)+1;

function App() {
  const[term,setTerm]= useState("")
  const handlevent =(e)=>{
    setTerm(e.target.value)
  }
  return (
    <div className="container">
      
      <div className='head'>
         <lable htmlFor="this">Guess the number between 1 to 10</lable>
      </div>
      <input id = "this" type='text' name='term' onChange={handlevent}/>
      <Result secretno={secretno} term={term}/>
    </div>
  );
}

export default App;

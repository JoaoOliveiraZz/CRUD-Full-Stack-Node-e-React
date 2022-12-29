
import './App.css';
import { FaUserAlt } from 'react-icons/fa';
import { MdEmail, MdPassword } from 'react-icons/md';
import React, { useState } from 'react';
import Axios from 'axios';


function App() {

  const [values, setValues] = useState();

  const changeValues = (value) => {
    setValues((prevValue) => (
      {
        ...prevValue,
        [value.target.name]: value.target.value,
      }
    ));
  }

  const makeSignup = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.Nome,
      email: values.Email,
      senha: values.Senha,
    })
  }



  return (
    <div className="Container">
      <div className='form-container'>
        <div className='form-header'>
          <h1 className='register-title'>Sign up</h1>
        </div>
        <form className='register-form' onSubmit={e => { e.preventDefault(); }}>
          <div className='input-container input-selected'>
            <FaUserAlt className='icon' />
            <input placeholder='Nome' type='text' name='Nome' className='register-input' id='input1' onChange={changeValues}></input>
          </div>
          <div className='input-container'>
            <MdEmail className='icon' />
            <input type='email' name='Email' className='register-input' placeholder='Email' onChange={changeValues}></input>
          </div>
          <div className='input-container'>
            <MdPassword className='icon' />
            <input type='password' name='Senha' className='register-input' placeholder='Senha' onChange={changeValues}></input>
          </div>
          <div className='button-container'>
            <button className='register-button' onClick={makeSignup}>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

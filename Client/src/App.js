
import './App.css';
import { FaUserAlt } from 'react-icons/fa';
import { MdEmail, MdPassword } from 'react-icons/md';
import React, { useState } from 'react';


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
  
  return (
    <div className="Container">
      <div className='form-container'>
        <div className='form-header'>
          <h1 className='register-title'>Sign up</h1>
        </div>
        <form className='register-form'>
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
            <button className='register-button' onClick={console.log(values)}>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

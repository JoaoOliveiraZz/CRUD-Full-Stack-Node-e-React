
import './makeUsers.css';
import { FaUserAlt } from 'react-icons/fa';
import { MdEmail, MdPassword } from 'react-icons/md';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignUpForm() {

  axios.defaults.baseURL = 'http://localhost:3001'
  const [values, setValues] = useState();
  console.log(values)

  const changeValues = (value) => {
    setValues((prevValue) => (
      {
        ...prevValue,
        [value.target.name]: value.target.value,
      }
    ));
  }

  const makeSignup = () => {
    axios.post(`${axios.defaults.baseURL}/makeUser`, {
      Nome: values.Nome,
      Email: values.Email,
      Senha: values.Senha
    }).then(
      (response) => {
        console.log(response)
      }
    ).catch(
      (error) => {
        console.log(error.request)
      }
    )
  }



  return (
    <div className="Container">
      <div className='form-container'>
        <div className='form-header'>
          <h1 className='register-title'>New Here?</h1>
          <span className='register-description'>Make your account now</span>
        </div>
        <form className='register-form' onSubmit={e => { e.preventDefault(); }}>
          <div className='input-container input-selected'>
            <FaUserAlt className='icon' />
            <input placeholder='Name' type='text' name='Nome' className='register-input' id='input1' onChange={changeValues}></input>
          </div>
          <div className='input-container'>
            <MdEmail className='icon' />
            <input type='email' name='Email' className='register-input' placeholder='Email' onChange={changeValues}></input>
          </div>
          <div className='input-container'>
            <MdPassword className='icon' />
            <input type='password' name='Senha' className='register-input' placeholder='Password' onChange={changeValues}></input>
          </div>
          <div className='button-container'>
            <button className='register-button' onClick={makeSignup}>SignUp</button>
            <button className='register-button'><Link className='Link' to={'../'}>Cancelar</Link></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;

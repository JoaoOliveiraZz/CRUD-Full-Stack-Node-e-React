import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdPassword } from "react-icons/md";
import './makeUsers.css'


export default function EditUser() {

    const [values, setValues] = useState();
    const id = useParams().id;
    axios.defaults.baseURL = 'http:localhost:3001';

    const changeValues = (value) => {
        setValues(
            (prevValue) => (
                {
                    ...prevValue,
                    [value.target.name]: value.target.value
                }
            )
        )
    }

    const editUser = ()  => {axios.post(`${axios.defaults.baseURL}/edituser`,{
        id: id,
        Nome: values.Nome,
        Email: values.Email,
        Senha: values.senha
    }).then(
        (response) => {
            console.log(response);
        }
    ).catch(
        (err) => {
            console.log(err);
        }
    )
}


    return (
        <div className="Container">
            <div className='form-container'>
                <div className='form-header'>
                    <h1 className='register-title'>Editing accounts?</h1>
                    <span className='register-description'>Edit a any momment</span>
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
                        <button className='register-button' onClick={console.log(editUser)}>SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    )

}
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdPassword } from "react-icons/md";
import './makeUsers.css'
import { Navigate, Link } from "react-router-dom";


export default function EditUser() {

    
    let Nome = useParams().Nome;
    toString(Nome);
    Nome = Nome.substring(1, Nome.length);

    let Email = useParams().Email;
    toString(Email);
    Email = Email.substring(1, Email.length);

    let Senha = useParams().Senha;
    toString(Senha);
    Senha = Senha.substring(1, Senha.length);
    
 
    
    const [values, setValues] = useState({
        Nome: Nome,
        Email: Email,
        Senha: Senha
    });

    const id = useParams().id;
    axios.defaults.baseURL = 'http://localhost:3001';
    
    
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

    const edituser = () => {
        axios.put(`${axios.defaults.baseURL}/edituser`, {
            id: id,
            Nome: values.Nome,
            Email: values.Email,
            Senha: values.Senha
        }).then(
            document.location.replace('../../../../showusers')
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
                    <h1 className='register-title'>Editing Users?</h1>
                    <span className='register-description'>Edit accounts here!</span>
                </div>
                <form className='register-form' onSubmit={e => { e.preventDefault(); }}>
                    <div className='input-container input-selected'>
                        <FaUserAlt className='icon' />
                        <input placeholder='Name' type='text' name='Nome'  value={values.Nome}  className='register-input' id='input1' onChange={changeValues}></input>
                    </div>
                    <div className='input-container'>
                        <MdEmail className='icon' />
                        <input type='email' name='Email' className='register-input' value={values.Email} placeholder='Email' onChange={changeValues}></input>
                    </div>
                    <div className='input-container'>
                        <MdPassword className='icon' />
                        <input type='password' name='Senha' className='register-input' value={values.Senha} placeholder='Password' onChange={changeValues}></input>
                    </div>
                    <div className='button-container'>
                        <button className='register-button' onClick={edituser}>Edit</button>
                        <button className='register-button'><Link className='Link' to={'../'}>Cancelar</Link></button>
                    </div>
                </form>
            </div>
        </div>
    )

}
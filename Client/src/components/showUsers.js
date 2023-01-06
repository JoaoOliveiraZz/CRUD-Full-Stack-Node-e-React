import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import './showUsers.css';
import { Link } from "react-router-dom";

function ShowUsers() {

    const [listUsers, setListUsers] = useState();
    axios.defaults.baseURL = 'http://localhost:3001';



    useEffect(() => {

        axios.get(`${axios.defaults.baseURL}/getUsers`).then((response) => {
            setListUsers(response.data)
        }).catch((err) => {
            console.log(err);
        })

    }, [])

    return (

        <div className="table-container">
            <h1>Usuários Cadastrados</h1>
            <table className="users-table">
                <thead className="users-table-head">
                    <tr className="table-row">
                        <td className="table-collumn">Id</td>
                        <td className="table-collumn">Nome</td>
                        <td className="table-collumn">Email</td>
                        <td className="table-collumn">Senha</td>
                        <td className="table-collumn">Editar</td>
                        <td className="table-collumn">Excluir</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUsers !== undefined && listUsers.map((value) => {
                            return (
                                <tr className="table-row">
                                    <td className="table-collumn">{value.id}</td>
                                    <td className="table-collumn">{value.Nome}</td>
                                    <td className="table-collumn">{value.Email}</td>
                                    <td className="table-collumn">{value.Senha}</td>
                                    <td className="table-collumn"><Link to={`../edituser/:${value.id}/:${value.Nome}/:${value.Email}/:${value.Senha}`}>Editar</Link></td>
                                    <td className="table-collumn"></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowUsers;
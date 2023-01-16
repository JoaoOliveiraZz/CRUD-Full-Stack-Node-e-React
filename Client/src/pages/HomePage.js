import React from "react";
import './HomePage.css';
import { Link } from "react-router-dom";


export default function HomePage(){

    return(
        <div className="container">
            <h1>CRUD DE USUÁRIOS COM REACT + NODE JS</h1>
            <div className="box-container">
                <div className="box">
                    <Link to={'/makeuser'} className='Link' >Adicionar Usuários</Link>
                    
                </div>
                <div className="box">
                    <Link to={'/showusers'} className='Link' >Visualizar usuários</Link>
                </div>
            </div>
        </div>
    )

}
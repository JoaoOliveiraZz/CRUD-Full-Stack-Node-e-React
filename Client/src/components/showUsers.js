import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";

function ShowUsers(){

    const [listUsers, setListUsers] = useState();
    axios.defaults.baseURL = 'http://localhost:3001'
    
    
    
    useEffect(() => {

        axios.get(`${axios.defaults.baseURL}/getUsers`).then((response) => {
            setListUsers(response.data)
        }).catch((err) => {
            console.log(err);
        })
        
    },[])

    return(
        <h1>Olá</h1>
        
    )
}

export default ShowUsers;
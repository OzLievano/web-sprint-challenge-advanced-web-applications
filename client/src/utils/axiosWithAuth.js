import axios from 'axios'
import {useState} from 'react'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL:"http://localhost:5000/api",
        headers: {
            Authorization:token
        }
    })
}


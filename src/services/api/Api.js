import axios from  'axios'
import React, { Component } from 'react'

axios.get('http://localhost:3000/user/12')
.then (reponse => {
    console.log(reponse.data)
     
})
.catch (error =>{
    console.log(error)
})


export default class Api extends Component {
    
       
    
    render() {
        return (
            <div>
            <p></p>
            </div>
        )
    }
}

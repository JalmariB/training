import React from 'react';
import { Component } from 'react';
const axios = require('axios');

require('../sass/main.scss');

export default class Main extends Component {

  constructor(props) {
    super(props);
   
  }

  get(){
    
    axios.get('https://localhost:8000/notes/5b3e55297f1be519980c61a5/')
      .then(function (response) {
        // handle success
        console.log('response', response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  } 


  render() {
    this.get();
    return (
     <div>
       <p>moro</p>
     </div>
      );
  }

}


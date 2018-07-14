import React from 'react';
import { Component } from 'react';
const axios = require('axios');

require('../sass/main.scss');

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  get(){
    console.log('get function')
    axios.get('localhost:8000/notes/5b3e55297f1be519980c61a5')
      .then(function (response) {
        // handle success
        console.log(response);
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
     <section className="main-container">
       moro
     </section>
      );
  }

}



//localhost:8000/notes/5b3e55297f1be519980c61a5/
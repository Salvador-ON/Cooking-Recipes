import React from 'react';
import logo from '../assets/ring.png';
import character from '../assets/cut-food.png'
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types';


const Waiting = ({dataQuery}) => {
  return (
    <div className="App">
      
      <div className="App-welcome">
        
        
        <h4 className="title-searching mt-2 mt-md-3 mb-5 mb-md-0">Searching {dataQuery} recipes</h4>

        <div className="welcome-cont mt-5 mt-md-0" style={{background: "url(" + character + ")",}}>
          <img src={logo} className="App-logo mx-auto d-block" alt="logo" />
          
        </div>
        
        
      </div>
    </div>
    );
}
 
Waiting.propTypes = {
  dataQuery: PropTypes.string.isRequired,
  
};

export default Waiting;
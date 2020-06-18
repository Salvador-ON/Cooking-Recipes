import React from 'react';
import logo from '../assets/ring.png';
import character from '../assets/cut-food.png'
import Formsearch from './Formsearch'
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types';


const Landing = ({SetData, SetSearching, SetWelcome, SetRecipes, SetInvalid, invalidQuery}) => {
  return (
    <div className="App">
      
      <div className="App-welcome">
        
        
        <h1 className="title-welcome mt-2 mt-md-0 mb-5 mb-md-0">Cooking Recipes</h1>
        <Formsearch SetData={SetData} SetSearching={SetSearching} SetWelcome={SetWelcome} SetRecipes={SetRecipes} SetInvalid={SetInvalid} invalidQuery={invalidQuery}className="searchBar"/>
        <div className="welcome-cont mt-5 mt-md-0" style={{background: "url(" + character + ")",}}>
          <img src={logo} className="App-logo mx-auto d-block" alt="logo" />
          
        </div>
        
        
      </div>
    </div>
    );
}


Landing.propTypes = {
  SetData: PropTypes.func.isRequired,
  SetSearching: PropTypes.func.isRequired,
  SetWelcome: PropTypes.func.isRequired,
  SetRecipes: PropTypes.func.isRequired,
  SetInvalid: PropTypes.func.isRequired,
  invalidQuery: PropTypes.bool.isRequired,

};
 
export default Landing;
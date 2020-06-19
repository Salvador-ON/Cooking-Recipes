import React from 'react';
import logo from '../assets/ring.png';
import character from '../assets/cut-food.png'
import Formsearch from './Formsearch'
import styles from "../styles/App.module.css";
import PropTypes from 'prop-types';


const Landing = ({SetData, SetSearching, SetWelcome, SetInvalid, invalidQuery}) => {
  return (
    <div className={styles.App}>
      
      <div className={styles.AppWelcome}>
        
        
        <h1 className={styles.titleWelcome + " mt-2 mt-md-0 mb-3 mb-md-0"}>Cooking Recipes</h1>
        <Formsearch SetData={SetData} SetSearching={SetSearching} SetWelcome={SetWelcome} SetInvalid={SetInvalid} invalidQuery={invalidQuery} className={styles.titleWelcome}/>
        <div className={styles.welcomeCont + " mt-5 mt-md-0"} style={{background: "url(" + character + ")",}}>
          <img src={logo} className={styles.AppLogo+" mx-auto d-block"} alt="logo" />
          
        </div>
        
        
      </div>
    </div>
    );
}


Landing.propTypes = {
  SetData: PropTypes.func.isRequired,
  SetSearching: PropTypes.func.isRequired,
  SetWelcome: PropTypes.func.isRequired,
  SetInvalid: PropTypes.func.isRequired,
  invalidQuery: PropTypes.bool.isRequired,

};
 
export default Landing;
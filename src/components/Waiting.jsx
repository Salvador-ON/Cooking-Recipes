import React from 'react';
import logo from '../assets/ring.png';
import character from '../assets/cut-food.png'
import styles from "../styles/App.module.css";
import PropTypes from 'prop-types';


const Waiting = ({dataQuery}) => {
  return (
    <div className={styles.App}>
      
      <div className={styles.AppWelcome}>
        
        
        <h4 className={styles.titleSearching +" mt-2 mt-md-3 mb-5 mb-md-0"}>Searching {dataQuery} recipes</h4>

        <div className= {styles.welcomeCont + " mt-5 mt-md-0"} style={{background: "url(" + character + ")",}}>
          <img src={logo} className= {styles.AppLogo +" mx-auto d-block"} alt="logo" />
          
        </div>
        
        
      </div>
    </div>
    );
}
 
Waiting.propTypes = {
  dataQuery: PropTypes.string.isRequired,
  
};

export default Waiting;
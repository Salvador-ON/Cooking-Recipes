import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux'
import {changeStateFavs} from '../actions'

const NavBar = ({SetReset}) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className="fixed-top">
        <Navbar.Brand onClick={SetReset} href="#home">Cooking-Recipes  <FontAwesomeIcon icon={faUtensils} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link  href="#Fav" onClick={() => dispatch(changeStateFavs(true))}>Favorite Recipes</Nav.Link>
            <Nav.Link onClick={SetReset} href="#Search">Search-Recipes</Nav.Link>
          </Nav>
         
          
          
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};


NavBar.propTypes = {
  SetReset: PropTypes.func.isRequired,
};

export default NavBar;

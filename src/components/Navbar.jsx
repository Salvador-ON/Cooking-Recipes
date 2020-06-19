import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils} from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from 'react-redux'
import {changeStateFavs} from '../actions'
import {Link} from 'react-router-dom'

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className="fixed-top">
      <Link to='/'>
        <Navbar.Brand onClick={() => dispatch(changeStateFavs(false))}>Cooking-Recipes  <FontAwesomeIcon icon={faUtensils} /> </Navbar.Brand>
      </Link>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Link to='/favorites'>
            <Navbar.Text className="mx-md-2" onClick={() => dispatch(changeStateFavs(true))}>
              Favorite Recipes
            </Navbar.Text>
          </Link>
          <Link to='/'>

          <Navbar.Text className="mx-md-2" onClick={() => dispatch(changeStateFavs(false))}>
            Search-Recipes
          </Navbar.Text>
          </Link>
            
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};


export default NavBar;

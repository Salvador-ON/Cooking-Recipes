import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils} from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from 'react-redux'
import {erraseRecipes} from '../actions'
import {changeStateFavs} from '../actions'
import {Link} from 'react-router-dom'

const NavBar = () => {
  const dispatch = useDispatch();

  const ResetSearch = () => {
    dispatch(changeStateFavs(false));
    dispatch(erraseRecipes())
  }

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className="fixed-top">
      <Link to='/'>
        <Navbar.Brand onClick={() => ResetSearch()}>Cooking-Recipes  <FontAwesomeIcon icon={faUtensils} /> </Navbar.Brand>
      </Link>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Link to='/favorites'>
            <Navbar.Text data-testid="FavRecipes" className="mx-md-2" onClick={() => dispatch(changeStateFavs(true))}>
              Favorite Recipes
            </Navbar.Text>
          </Link>
          <Link to='/'>

          <Navbar.Text data-testid="SearchRecipes" className="mx-md-2" onClick={() => ResetSearch()}>
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

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/App.css";
import { Modal, Button, Image, ListGroup} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux'
import {addSavedRecipes} from '../actions'
import {removeRecipes, removeSavedRecipes} from '../actions'

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  url,
  recipe,
  favorites,
}) => {

  console.log(ingredients);
  
  const dispatch = useDispatch();

  const SetFavorite = () => {
    dispatch(addSavedRecipes(recipe));
    dispatch(removeRecipes(recipe.recipe.calories));
  };

  const RemoveFav=()=>{
    dispatch(removeSavedRecipes(calories))
  }

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <React.Fragment>
      <div className="card border border-secondary text-white col-11 col-md-3 mx-auto mx-md-2 my-2 px-0"> 
      <img src={image} className="card-img" alt={title} />
      { !favorites ? <FontAwesomeIcon onClick={() => SetFavorite()} icon={faHeart} className="text-red fa-2x heartLike"/> : <FontAwesomeIcon  onClick={() => RemoveFav()} icon={faTrash} className="text-wh fa-2x heartLike"/>}
      
      <div onClick={handleShow} className="card-img-overlay card-grey linksTitle">
      
        <span className="h5 card-title mr-2">
          <span className="font-weight-bold">
            {title} <br/> <small>Cal:{Math.trunc(calories)}</small>
          </span>
        </span>
      </div>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Image src={image} fluid className="mx-auto d-block"/>
        {ingredients.map((ingredient) => (
          <ListGroup.Item key={ingredient.weight}>{ingredient.text}</ListGroup.Item>
        ))}
        <ListGroup variant="flush">

        
        </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button href={url} variant="success" target="_blank" rel="noopener noreferrer">
            Check Intructions
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
    
  );
};



  Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  ingredients: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  recipe: PropTypes.object.isRequired,
  favorites: PropTypes.bool.isRequired,
};

export default Recipe;

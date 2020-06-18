import React from 'react';
import {Form, FormControl, Button, Alert } from "react-bootstrap";
import PropTypes from 'prop-types';

const Formsearch = ({SetData, SetSearching, SetWelcome, SetRecipes, SetInvalid, invalidQuery}) => {
  const [error, useError] = React.useState(invalidQuery);

  const [search, useSearch] = React.useState("");

  const HandleChange = (e) => {
    useSearch(e.target.value);
  };

  const SetError = (value) => {
    useError(value);
  };

  const ResetData = () => {
    useSearch("");
  };

  const submitData= (e) => {
    e.preventDefault();
    
    
    if (
      search.trim() === ""
    ) {
      SetError(true);
      return;
    }

    SetError(false);
    SetData(search);
    SetSearching(true)
    SetWelcome(false)
    getRecipes();
    ResetData();
  };

  
    const keys = {
      ID: "25497968",
      KEY: "25954bc08dbb1d64e09f408fe4012347",
    };

    const url =`https://api.edamam.com/search?q=${search}&app_id=${keys.ID}&app_key=${keys.KEY}`;

    const getRecipes = async () => {
      const response = await fetch(url);
      const data = await response.json();
      if(data.count === 0){
        SetInvalid(true);
      }else{
        SetInvalid(false);
      }
       
      SetRecipes(data.hits)
      console.log(data);
      
      // setRecipes(data.hits);
    };

  
  return (  

    <React.Fragment>
      <Form onSubmit={submitData} className="d-flex">
        <FormControl type="text" onChange={HandleChange} name="food" placeholder="Search Recipes" className="w-100 mr-2" value={search}/>
        <Button type="submit" variant="outline-light" className="w-50">Search</Button>
      </Form>
      <div>
        {error && !invalidQuery ? (
        <Alert  variant="danger" className="my-1 my-md-2 mx-0 mx-md-1 py-1 align-self-center">
        Error Empty Field
        </Alert>
        ) : null}
        {error && invalidQuery ?  (
        <Alert  variant="danger" className="my-1 my-md-2 mx-0 mx-md-1 py-1 align-self-center">
        There are not recipes. Try again
        </Alert>
        ) : null}
    </div>
    </React.Fragment>
  );
}



Formsearch.propTypes = {
  SetData: PropTypes.func.isRequired,
  SetSearching: PropTypes.func.isRequired,
  SetWelcome: PropTypes.func.isRequired,
  SetRecipes: PropTypes.func.isRequired,
  SetInvalid: PropTypes.func.isRequired,
  invalidQuery: PropTypes.bool.isRequired,

};

 
export default Formsearch;
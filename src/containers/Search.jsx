import React from 'react';
import '../styles/App.css';
import Waiting from '../components/Waiting';
import Landing from '../components/Landing';
import Recipes from './Recipes';
import { useSelector, useDispatch } from 'react-redux';
import { erraseRecipes, changeStateFavs } from '../actions';


const Search = () => {

  const [welcome, useWelcome] = React.useState(true);
  const [dataQuery, useDataQuery] = React.useState('');
  const [searching, useSearching] = React.useState(false);
  const [invalidQuery, useInvalidQuery] = React.useState(false);
  const dispatch = useDispatch();
  
  const recipes = useSelector(state => state.recipes);
  const favorites = useSelector(state => state.favorites);

  const SetData = data => {
    useDataQuery(data);
  };

  const SetSearching = data => {
    useSearching(data);
  };

  const SetWelcome = data => {
    useWelcome(data);
  };

  const SetReset = () => {
    SetSearching(false);
    SetData('');
    SetWelcome(true);
    dispatch(erraseRecipes());
    dispatch(changeStateFavs(false));
  };

  const SetInvalid = value => {
    useInvalidQuery(value);
    if (value) {
      SetReset();
    }
  };

  return (
    <div className="App">
      {welcome && !favorites ? (
        <Landing
          SetData={SetData}
          SetSearching={SetSearching}
          SetWelcome={SetWelcome}
          SetInvalid={SetInvalid}
          invalidQuery={invalidQuery}
        />
      ) : null}

      {searching && recipes.length === 0 ? (<Waiting dataQuery={dataQuery} />) : null}

      {recipes.length > 0 || favorites ? (<Recipes />) : null}
    </div>
    );
}

 
export default Search;
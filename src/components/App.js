import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Landing from './Landing';
import Waiting from './Waiting';
import NavBar from './Navbar';
import Recipes from '../containers/Recipes';
import { erraseRecipes, changeStateFavs } from '../actions';

function App() {
  // const [savedRecipes, useSavedRecipes] = React.useState(favRecipes);
  const [welcome, useWelcome] = React.useState(true);
  const [dataQuery, useDataQuery] = React.useState('');
  const [searching, useSearching] = React.useState(false);
  const [invalidQuery, useInvalidQuery] = React.useState(false);

  const dispatch = useDispatch();

  const recipes = useSelector(state => state.recipes);
  const favorites = useSelector(state => state.favorites);
  const savedRecipes = useSelector(state => state.savedRecipes);

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

  React.useEffect(() => {
    if (savedRecipes) {
      localStorage.setItem('favs', JSON.stringify(savedRecipes));
    } else {
      localStorage.setItem('favs', JSON.stringify([]));
    }
  }, [savedRecipes]);

  return (
    <div className="App">
      <NavBar SetReset={SetReset} />
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

export default App;

import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from '../containers/Search';
import NavBar from './Navbar';
import Recipes from '../containers/Recipes';

function App() {
  const savedRecipes = useSelector(state => state.savedRecipes);
  React.useEffect(() => {
    if (savedRecipes) {
      localStorage.setItem('favs', JSON.stringify(savedRecipes));
    } else {
      localStorage.setItem('favs', JSON.stringify([]));
    }
  }, [savedRecipes]);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/favorites" component={Recipes} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;

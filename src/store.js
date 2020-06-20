import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';

const store = () => createStore(allReducers);

export default store
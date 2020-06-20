import '@testing-library/jest-dom'
import React from 'react'
import {render, fireEvent, screen} from 
'@testing-library/react'
import { Provider } from 'react-redux';
import 'jest-dom/extend-expect'
import store from '../store'
import App from '../components/App';

const renderComponent = () => render(
  <Provider store={store()}/> 
    <App/>
  <Provider/>
);


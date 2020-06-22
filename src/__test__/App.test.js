import React from 'react';
import { render, fireEvent, cleanup } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';

afterEach(cleanup);

test('rendering main app', () => {
  expect(render(<App />)).toMatchSnapshot();
});

test('render landing page component', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('TitleWelcome')).toHaveTextContent('Cooking Recipes');
});

test('render navbar component favorites recipes button', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('FavRecipes')).toHaveTextContent('Favorite Recipes');
});

test('render navbar component favorites search button', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('SearchRecipes')).toHaveTextContent('Search-Recipes');
});

test('should render empty saved recipes component', () => {
  const { container, getByTestId } = render(<App />);
  fireEvent.click(getByTestId('FavRecipes'));
  expect(container.innerHTML).toMatch("You don't have any recipes saved!");
});

test('should render search recipes component after beeing on saved recipes component', () => {
  const { container, getByTestId } = render(<App />);
  fireEvent.click(getByTestId('FavRecipes'));
  fireEvent.click(getByTestId('SearchRecipes'));
  expect(container.innerHTML).toMatch('Cooking Recipes');
});

test('should render error empty field formsearch recipes', () => {
  const { container, getByTestId } = render(<App />);
  fireEvent.click(getByTestId('SearchButton'));
  expect(container.innerHTML).toMatch('Error Empty Field');
});

test('should render waiting component while searching for pizza recipes', () => {
  const { container, getByTestId } = render(<App />);
  const input = getByTestId('FieldText');
  fireEvent.change(input, { target: { value: 'pizza' } });
  fireEvent.click(getByTestId('SearchButton'));
  expect(container.innerHTML).toMatch('Searching pizza recipes');
});

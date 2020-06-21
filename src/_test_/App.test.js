

// counter.test.js
import React from 'react'
import { createStore } from 'redux'
import { render, fireEvent, screen, cleanup } from './test-utils'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import App from '../components/App'

afterEach(cleanup);

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return { 
  ...render (
  <Router history={history}>
      {component}
  </Router>
  )
}
}

const setup = () => {
  const utils = render(<App />)
  const input = utils.getByTestId('FieldText')
  return {
    input,
    ...utils,
  }
}


test('rendering main app', () => {
  expect(render(<App />)).toMatchSnapshot()
})

test('render landing page component', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('TitleWelcome')).toHaveTextContent('Cooking Recipes')
})

test('render navbar component favorites recipes button', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('FavRecipes')).toHaveTextContent('Favorite Recipes')
})

test('render navbar component favorites search button', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('SearchRecipes')).toHaveTextContent('Search-Recipes')
})

test('should render empty saved recipes component', () => {
  const { container, getByTestId } = renderWithRouter(<App />) 
  fireEvent.click(getByTestId('FavRecipes'))
  expect(container.innerHTML).toMatch("You don't have any recipes saved!")

})


test('should render search recipes component after beeing on saved recipes component', () => {
  const { container, getByTestId } = renderWithRouter(<App />) 
  fireEvent.click(getByTestId('FavRecipes'))
  fireEvent.click(getByTestId('SearchRecipes'))
  expect(container.innerHTML).toMatch("Cooking Recipes")
  })

test('should render error empty field formsearch recipes', () => {
  const { container, getByTestId } = renderWithRouter(<App />) 
  fireEvent.click(getByTestId('SearchButton'))
  expect(container.innerHTML).toMatch("Error Empty Field")
  })

test('should render pizza searched recipes component', () => {
  const { container, getByTestId, utils } = renderWithRouter(<App />) 
  const input = getByTestId('FieldText')
  fireEvent.click(getByTestId('FavRecipes'))
  fireEvent.click(getByTestId('SearchRecipes'))
  expect(container.innerHTML).toMatch("Cooking Recipes")
  })

test('formsearch componeed should be empty', () => {
  const { input } = setup()
  expect(input.value).toBe('')
})





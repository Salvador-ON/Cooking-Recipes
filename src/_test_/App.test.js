

// counter.test.js
import React from 'react'
import { createStore } from 'redux'
import { render, fireEvent, screen } from './test-utils'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import App from '../components/App'

test('can render main app with redux', () => {
  expect(render(<App />)).toMatchSnapshot()
})

test('can render with redux with defaults', () => {
  render(<App />)
  expect(screen.getByText('Cooking Recipes')).toHaveTextContent('Cooking Recipes')
})

test('rendering a component that uses withRouter', () => {
  const history = createMemoryHistory()
  const route = '/favorites'
  history.push(route)
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  )
  expect(getByText('location-display')).toHaveTextContent("You don't have any recipes saved!")
})
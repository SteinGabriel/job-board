import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Should exist craiglist json file', () => {
  const jsonFile = require('./web-scraper/json-files/craiglist.json')
  expect(jsonFile).not.toBeNull()
})

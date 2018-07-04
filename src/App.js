import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      craigListOffersList: []
    }
  }

  componentDidMount() {
    this.loadAndCreateCraiglistOffersList()
  }

  loadAndCreateCraiglistOffersList() {
    const offersFile = require('./web-scraper/json-files/craiglist.json')
    const offersList = offersFile.list

    const craigListOffersList = []

    offersList.map(offer => {
      craigListOffersList.push(offer)
    })

    this.setState({
      craigListOffersList,
      loading: false
    })
  }

  renderCraiglistOffers() {
    const craigListOffersList = this.state.craigListOffersList
    return (
      <div>
        {craigListOffersList.map(offer => {
          return (
            <div>
              <div>
                <div>{offer.title}</div>
              </div>
              <div>
                <div>{offer.url}</div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    if (this.state.loading) {
      return <div>Loading</div>
    } else {
      return this.renderCraiglistOffers()
    }
  }
}

export default App

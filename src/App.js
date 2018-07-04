import React, { Component } from 'react'
import Header from './components/Header/header'
import styled from 'styled-components'
import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import './style.css'

const PageWrapper = styled.div`
  padding: 50px;
  width: 90%;
  margin: 0 auto;
  background: #2d3142;
`

const SiteContainer = styled.div`
  width: 500px;
  height: auto;
  max-height: 100vh;
  background: #4f5d75;
  padding: 5px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.1),
    0 6px 10px 5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`

const Row = styled.div`
  width: 100%;
  height: 4rm;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  margin: 4px;
  min-width: 400px;
`
const Link = styled.a`
  text-decoration: none;
  color: #fff;
`

const Title = styled.h1`
  color: #bfc0c0;
`

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
      <SiteContainer>
        <Title>Craiglist</Title>
        <div>
          {craigListOffersList.map(offer => {
            return (
              <Row>
                <Column>
                  <Link href={offer.url}>{offer.title}</Link>
                </Column>
              </Row>
            )
          })}
        </div>
      </SiteContainer>
    )
  }

  render() {
    if (this.state.loading) {
      return <div>Loading</div>
    } else {
      return (
        <PageWrapper>
          <Header />
          {this.renderCraiglistOffers()}
        </PageWrapper>
      )
    }
  }
}

export default App

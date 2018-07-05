import React, { Component } from 'react'
import Header from './components/Header/header'
import styled from 'styled-components'
import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import {
  PageWrapper,
  Content,
  SiteContainer,
  SiteContainerHeader,
  Row,
  Column,
  Link,
  Title,
  UpdatedTime,
  StyledClock,
  Loading
} from './style.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      craigListUpdatedTime: null,
      craigListOffersList: []
    }
  }

  componentDidMount() {
    this.loadAndCreateCraiglistOffersList()
  }

  loadAndCreateCraiglistOffersList() {
    const offersFile = require('./web-scraper/json-files/craiglist.json')
    const offersList = offersFile.list
    const craigListUpdatedTime = this.formatUpdatedTime(offersFile.updated_time)
    const craigListOffersList = []

    offersList.map(offer => {
      craigListOffersList.push(offer)
    })

    this.setState({
      craigListOffersList,
      craigListUpdatedTime,
      loading: false
    })
  }

  formatUpdatedTime(time) {
    const formatedTime = String(time)
      .split('T')
      .join(' ')

    return formatedTime
  }

  renderCraiglistOffersList() {
    const craigListOffersList = this.state.craigListOffersList
    return (
      <SiteContainer>
        <SiteContainerHeader>
          <Title>Craiglist</Title>
          <UpdatedTime>
            <StyledClock />
            {this.state.craigListUpdatedTime}
          </UpdatedTime>
        </SiteContainerHeader>
        <div>
          {craigListOffersList.map(offer => {
            return (
              <Row>
                <Column>
                  <Link target="_blank" href={offer.url}>
                    {offer.title}
                  </Link>
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
      return (
        <div>
          <Header />
          <PageWrapper>
            <Loading>Loading...</Loading>
          </PageWrapper>
        </div>
      )
    } else {
      return (
        <div>
          <Header />
          <PageWrapper>
            <Content>{this.renderCraiglistOffersList()}</Content>
          </PageWrapper>
        </div>
      )
    }
  }
}

export default App

import React, { Component } from 'react'
import Header from './components/Header/header'
import styled from 'styled-components'
import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import { Clock } from 'styled-icons/fa-solid'
import './style.css'

const PageWrapper = styled.div`
  padding: 50px;
  width: 90%;
  margin: 0 auto;
  background: #2d3142;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`

const SiteContainer = styled.div`
  position: relative;
  width: 500px;
  height: auto;
  background: #4f5d75;
  padding: 10px;
  margin-right: 10px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.1),
    0 6px 10px 5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`

const SiteContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  &:hover {
    color: #9ab87a;
  }
`

const Title = styled.h1`
  color: #9ab87a;
`

const UpdatedTime = styled.h5`
  position: absolute;
  right: 5px;
  top: 2px;
  display: flex;
  height: 5px;
  flex-direction: row;
  align-items: center;
  font-size: 10px;
  color: gray;
  float: right;
`

const StyledClock = styled(Clock)`
  height: 16px;
  width: 16px;
  margin-right: 5px;
`

const Loading = styled.h1`
  color: #fff;
  font-size: 2em;
`

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

  formatUpdatedTime(time) {
    const formatedTime = String(time)
      .split('T')
      .join(' ')

    return formatedTime
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

  renderCraiglistOffers() {
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
            <Content>{this.renderCraiglistOffers()}</Content>
          </PageWrapper>
        </div>
      )
    }
  }
}

export default App

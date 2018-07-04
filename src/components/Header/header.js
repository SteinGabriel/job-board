import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Title = styled.h1`
  font-size: 3em;
  color: #bfc0c0;
`

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Title>Job Board</Title>
      </Container>
    )
  }
}

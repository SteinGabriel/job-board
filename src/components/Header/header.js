import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 6.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #212430;
  border-bottom: 2px dashed rgba(0, 0, 0, 0.4);
`

const Title = styled.h1`
  font-size: 3em;
  color: #9ab87a;
`

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Title>My Job Board</Title>
      </Container>
    )
  }
}

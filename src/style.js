import styled from 'styled-components'
import { Clock } from 'styled-icons/fa-solid'

export const PageWrapper = styled.div`
  padding: 50px;
  width: 90%;
  margin: 0 auto;
  background: #2d3142;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`

export const SiteContainer = styled.div`
  position: relative;
  width: 500px;
  height: auto;
  border-radius: 0.3em;
  background: #4f5d75;
  padding: 10px;
  margin-right: 10px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.1),
    0 6px 10px 5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`

export const SiteContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Row = styled.div`
  width: 100%;
  height: 4rm;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`

export const Column = styled.div`
  margin: 4px;
  min-width: 400px;
`
export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #9ab87a;
  }
`

export const Title = styled.h1`
  color: #9ab87a;
`

export const UpdatedTime = styled.h5`
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

export const StyledClock = styled(Clock)`
  height: 16px;
  width: 16px;
  margin-right: 5px;
`

export const Loading = styled.h1`
  color: #fff;
  font-size: 2em;
`

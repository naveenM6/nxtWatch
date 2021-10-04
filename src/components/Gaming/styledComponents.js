import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  @media (max-width: 767px) {
    margin-top: -25px;
  }
`

export const HeadDiv = styled.div`
  @media (max-width: 767px) {
    margin-top: 45px;
  }
`

export const HeaderEl = styled.h1`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  padding: 20px 0;
  padding-left: 40px;
  display: flex;
  align-items: center;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 25px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const ListItem = styled.li`
  margin-right: 20px;
  display: flex;
  cursor: pointer;
`

export const ImageTag = styled.img`
  width: ${props => props.width};
  object-fit: contain;
  @media (max-width: 767px) {
    width: 150px;
  }
`
export const ContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const ParaTag = styled.p`
  font-size: ${props => props.fontSize};
`

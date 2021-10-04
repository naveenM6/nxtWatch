import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  @media (max-width: 767px) {
    margin-top: -21px;
  }
`

export const ErrorContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    width: 100%;
  }
`
export const LogoImage = styled.img`
  width: ${props => props.width};
  object-fit: contain;
`

export const ContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
`

export const ParaTag = styled.p`
  font-size: ${props => props.fontSize};
`
export const ErrorImg = styled.img`
  width: 35%;
  object-fit: contain;
`
export const Head = styled.h1``

export const Para = styled.p``

export const Button = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
`

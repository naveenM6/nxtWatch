import styled from 'styled-components'

export const VideoContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  overflow: auto;
`

export const VideoFrameContainer = styled.div`
  width: 100%;
  overflow: auto;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const ParaEl = styled.p`
  font-size: 15px;
  padding-left: 20px;
  cursor: ${props => props.crsr};
  margin-top: -5px;
  @media (min-width: 768px) {
    align-self: flex-start;
  }
  @media (max-width: 767px) {
    font-size: 13px;
  }
`
export const AttributesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 0;
  align-items: center;
  border-bottom: 2px solid ${props => props.color};
  margin: 0 10px;
`
export const ChannelContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`

export const ContentContainer = styled.div``

export const ImageEl = styled.img`
  height: 40px;
`

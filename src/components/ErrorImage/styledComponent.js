import styled from 'styled-components'

export const ErrorContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    padding: 25px;
    padding-top: 50px;
  }
`
export const ErrorImg = styled.img`
  width: 35%;
  object-fit: contain;
  @media (max-width: 767px) {
    width: 50%;
  }
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

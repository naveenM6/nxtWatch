import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ShadowContainer = styled.div`
  padding: 40px 20px;
  box-shadow: 0px 0px 20px 5px #c6c9cc;
  @media (max-width: 767px) {
    width: 90%;
  }
`

export const LoginDivContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction === 'row' ? 'row' : 'column')};
  margin-top: 10px;
  align-self: center;
`

export const ImageEl = styled.img`
  width: 60%;
  object-fit: contain;
  margin-bottom: 20px;
  margin-left: 20%;
`

export const LoginFormContainer = styled.form``

export const LabelEl = styled.label`
  margin-bottom: 2px;
  font-weight: bold;
  cursor: ${props => props.cursor};
`

export const InputEl = styled.input`
    padding: 10px;
    outline: none;
}
`

export const ButtonEl = styled.button`
  color: #ffffff;
  background-color: blue;
  width: 100%;
  cursor: pointer;
  border: 0px;
  outline: none;
  padding: 10px;
  border-radius: 4px;
  margin-top: 15px;
`
export const ErrorMsg = styled.p`
  color: red;
`

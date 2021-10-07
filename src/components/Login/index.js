import {Component} from 'react'
import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  ShadowContainer,
  LoginDivContainer,
  ImageEl,
  LoginFormContainer,
  InputEl,
  LabelEl,
  ButtonEl,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    visibility: false,
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  showPassword = event => {
    if (event.target.checked) {
      this.setState({visibility: true})
    } else {
      this.setState({visibility: false})
    }
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  formSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      visibility,
      username,
      password,
      showSubmitError,
      errorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginContainer>
        <ShadowContainer>
          <ImageEl
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <LoginFormContainer onSubmit={this.formSubmit}>
            <LoginDivContainer>
              <LabelEl>USERNAME</LabelEl>
              <InputEl
                type="text"
                placeholder="Username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </LoginDivContainer>
            <LoginDivContainer>
              <LabelEl>PASSWORD</LabelEl>
              <InputEl
                type={visibility ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
            </LoginDivContainer>
            <LoginDivContainer direction="row">
              <InputEl
                type="checkbox"
                id="checkbox"
                onChange={this.showPassword}
              />
              <LabelEl htmlFor="checkbox" cursor="pointer">
                Show Password
              </LabelEl>
            </LoginDivContainer>
            <ButtonEl>Login</ButtonEl>
            {showSubmitError && (
              <ErrorMsg className="error-message">*{errorMsg}</ErrorMsg>
            )}
          </LoginFormContainer>
        </ShadowContainer>
      </LoginContainer>
    )
  }
}

export default Login

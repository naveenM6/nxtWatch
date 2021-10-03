import {ImageEl, DivEl, Header, Para} from './styledComponents'

import AppTheme from '../../context/Theme'

const NotFound = () => (
  <AppTheme.Consumer>
    {value => {
      const {activeTheme} = value
      const bgColor = activeTheme === 'light' ? '#ffffff' : '#000000'
      const color = activeTheme === 'light' ? '#000000' : '#ffffff'
      return (
        <DivEl bgColor={bgColor} color={color}>
          {activeTheme === 'light' ? (
            <>
              <ImageEl src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png" />
            </>
          ) : (
            <>
              <ImageEl src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png" />
            </>
          )}
          <Header>Page Not Found</Header>
          <Para>We are sorry,the page you requested could not be found.</Para>
        </DivEl>
      )
    }}
  </AppTheme.Consumer>
)

export default NotFound

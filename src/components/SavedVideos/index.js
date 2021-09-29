import {Component} from 'react'

import AppTheme from '../../context/Theme'

import {DivEl, ImageEl} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <AppTheme.Consumer>
        {values => {
          const {savedVideos} = values
          console.log(values, savedVideos)
          return (
            <DivEl>
              {savedVideos.length === 0 ? (
                <ImageEl
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
              ) : (
                ''
              )}
            </DivEl>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default SavedVideos

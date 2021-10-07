import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {MdPlaylistAdd} from 'react-icons/md'

import AppTheme from '../../context/Theme'

import {
  SavedVideosMainDiv,
  UnSavedVideosDiv,
  SavedVideosDiv,
  NotFoundHead,
  NotFoundPara,
  NoVideosImageEl,
  VideosImageEl,
  ListContainer,
  ListItems,
  MainHeader,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <AppTheme.Consumer>
        {values => {
          const {activeTheme, savedVideos} = values
          const bgColor = activeTheme === 'light' ? '#ffffff' : '#000000'
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          return (
            <SavedVideosMainDiv bgColor={bgColor} color={color}>
              {savedVideos.length === 0 ? (
                <UnSavedVideosDiv>
                  <NoVideosImageEl
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NotFoundHead>No saved videos found</NotFoundHead>
                  <NotFoundPara>
                    You can save your videos while watching them
                  </NotFoundPara>
                </UnSavedVideosDiv>
              ) : (
                <>
                  <MainHeader
                    bgColor={activeTheme === 'light' ? '#f1f1f1' : '#181818'}
                  >
                    <MdPlaylistAdd color="red" /> Saved Videos
                  </MainHeader>
                  {savedVideos.map(data => (
                    <Link
                      to={`/videos/${data.id}`}
                      className={
                        activeTheme === 'light' ? 'link-light' : 'link-dark'
                      }
                      key={data.id}
                    >
                      <SavedVideosDiv>
                        <VideosImageEl
                          src={data.thumbnailUrl}
                          alt={data.thumbnailUrl}
                        />
                        <ListContainer>
                          <ListItems fs="20px">{data.title}</ListItems>
                          <ListItems fs="12px">{data.channel.name}</ListItems>
                          <ListItems fs="12px">
                            {data.viewCount} Views . {data.publishedAt}
                          </ListItems>
                        </ListContainer>
                      </SavedVideosDiv>
                    </Link>
                  ))}
                </>
              )}
            </SavedVideosMainDiv>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default SavedVideos

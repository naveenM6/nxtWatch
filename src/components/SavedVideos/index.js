import {Component} from 'react'
import {Link} from 'react-router-dom'

import {AiFillFire} from 'react-icons/ai'

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
                    <AiFillFire color="red" /> Saved Videos
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
                          <ListItems>{data.channel.name}</ListItems>
                          <ListItems>
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

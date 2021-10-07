import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import {Link, Redirect} from 'react-router-dom'
import LoaderComp from '../Loader'

import './index.css'

import AppTheme from '../../context/Theme'

import {
  HomeContainer,
  ListContainer,
  ListItem,
  ContentDiv,
  ImageTag,
  ParaTag,
  HeadDiv,
  HeaderEl,
} from './styledComponents'

import ErrorImage from '../ErrorImage'

class Gaming extends Component {
  state = {dataArray: [], isLoading: true, status: ''}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        await this.setState({dataArray: data.videos, status: true})
      }
    } catch {
      await this.setState({status: false})
    }
    this.setState({isLoading: false})
  }

  render() {
    const {dataArray, isLoading, status} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value

          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const bgColor = activeTheme === 'light' ? '#f9f9f9' : '#000000'

          return (
            <HomeContainer
              data-testid="loader"
              bgColor={`${bgColor}`}
              color={`${color}`}
            >
              {isLoading ? (
                <LoaderComp />
              ) : (
                <>
                  {status ? (
                    <>
                      <HeadDiv>
                        <HeaderEl
                          bgColor={
                            activeTheme === 'light' ? '#f1f1f1' : '#181818'
                          }
                          color={color}
                        >
                          <SiYoutubegaming
                            size={40}
                            className={`trend-icon ${activeTheme}-icon`}
                          />{' '}
                          Gaming
                        </HeaderEl>
                      </HeadDiv>
                      <ContentDiv>
                        {dataArray.map(item => (
                          <Link
                            to={`/videos/${item.id}`}
                            className={
                              activeTheme === 'light'
                                ? 'link-light'
                                : 'link-dark'
                            }
                            key={item.id}
                          >
                            <ListContainer key={item.id}>
                              <ListItem>
                                <ImageTag
                                  src={`${item.thumbnail_url}`}
                                  width="180px"
                                  alt="video thumbnail"
                                />
                              </ListItem>
                              <ListItem>
                                <ParaTag fontSize="15px">{item.title}</ParaTag>
                              </ListItem>
                              <ListItem>
                                <ParaTag fontSize="12px">
                                  {item.view_count} Watching Worldwide
                                </ParaTag>
                              </ListItem>
                            </ListContainer>
                          </Link>
                        ))}
                      </ContentDiv>
                    </>
                  ) : (
                    <ErrorImage refresh={this.getVideos} />
                  )}
                </>
              )}
            </HomeContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Gaming

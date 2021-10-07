import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import LoaderComp from '../Loader'

import './index.css'

import AppTheme from '../../context/Theme'

import ErrorImage from '../ErrorImage'

import {
  HomeContainer,
  HeadDiv,
  SearchIp,
  ButtonEl,
  ListContainer,
  ListItem,
  ImageTag,
  ContentDiv,
  ParaTag,
  NoVideosImage,
  NoResults,
  NoResultsHeading,
  NoResultsPara,
  NoResultsButton,
} from './styledComponents'

class Home extends Component {
  state = {dataArray: [], isLoading: true, status: '', searchIp: ''}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async (searchVal = '') => {
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchVal}`
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
      this.setState({status: false})
    }
    this.setState({isLoading: false})
  }

  onChange = e => {
    this.setState({searchIp: e.target.value})
  }

  onSearch = () => {
    const {searchIp} = this.state
    this.getVideos(searchIp)
  }

  onKey = e => {
    if (e.key.toLowerCase() === 'enter') {
      this.onSearch()
    }
  }

  retry = () => {
    this.onSearch()
  }

  render() {
    const {dataArray, isLoading, status, searchIp} = this.state

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
            <HomeContainer bgColor={`${bgColor}`} color={`${color}`}>
              {isLoading ? (
                <LoaderComp />
              ) : (
                <>
                  {status ? (
                    <>
                      <HeadDiv>
                        <SearchIp
                          placeholder="Search Channel"
                          type="search"
                          value={searchIp}
                          onChange={this.onChange}
                          onKeyDown={this.onKey}
                        />
                        <ButtonEl onClick={this.onSearch}>
                          <AiOutlineSearch size={20} />
                        </ButtonEl>
                      </HeadDiv>
                      <>
                        {dataArray.length === 0 ? (
                          <NoResults>
                            <NoVideosImage
                              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                              alt="no videos"
                            />
                            <NoResultsHeading>
                              No Search results found
                            </NoResultsHeading>
                            <NoResultsPara>
                              Try different keywords or remove search filter
                            </NoResultsPara>
                            <NoResultsButton onClick={this.retry}>
                              Retry
                            </NoResultsButton>
                          </NoResults>
                        ) : (
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
                                <ListContainer>
                                  <ListItem>
                                    <ImageTag
                                      src={`${item.thumbnail_url}`}
                                      width="100%"
                                    />
                                  </ListItem>
                                  <ListItem>
                                    <div className="logo-div">
                                      <ImageTag
                                        src={`${item.channel.profile_image_url}`}
                                        width="30px"
                                      />
                                    </div>
                                    <div>
                                      <ParaTag fontSize="15px">
                                        {item.title}
                                      </ParaTag>
                                      <ParaTag fontSize="12px">
                                        {item.channel.name}
                                      </ParaTag>
                                      <ParaTag fontSize="12px">
                                        {item.view_count} views .{' '}
                                        <span>{item.published_at}</span>
                                      </ParaTag>
                                    </div>
                                  </ListItem>
                                </ListContainer>
                              </Link>
                            ))}
                          </ContentDiv>
                        )}
                      </>
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

export default Home

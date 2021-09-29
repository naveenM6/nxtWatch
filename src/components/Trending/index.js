import {Component} from 'react'
import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'

import {AiFillFire} from 'react-icons/ai'

import LoaderComp from '../Loader'

import './index.css'

import AppTheme from '../../context/Theme'

import {
  HomeContainer,
  ListContainer,
  ListItem,
  ImageTag,
  LogoImage,
  HeadDiv,
  HeaderEl,
  ContentDiv,
  ParaTag,
} from './styledComponents'

class Trending extends Component {
  state = {dataArray: [], isLoading: true}

  async componentDidMount() {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      await this.setState({dataArray: data.videos})
    }
    this.setState({isLoading: false})
  }

  render() {
    const {dataArray, isLoading} = this.state
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value

          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const bgColor = activeTheme === 'light' ? '#ffffff' : '#000000'

          return (
            <HomeContainer bgColor={`${bgColor}`} color={`${color}`}>
              {isLoading ? (
                <LoaderComp />
              ) : (
                <>
                  <HeadDiv>
                    <HeaderEl
                      bgColor={activeTheme === 'light' ? '#f1f1f1' : '#181818'}
                      color={color}
                    >
                      <AiFillFire
                        className={`trend-icon ${activeTheme}-icon`}
                      />{' '}
                      Trending
                    </HeaderEl>
                  </HeadDiv>
                  <ContentDiv>
                    {dataArray.map(item => (
                      <Link
                        to={`/videos/${item.id}`}
                        className={
                          activeTheme === 'light' ? 'link-light' : 'link-dark'
                        }
                        key={item.id}
                      >
                        <ListContainer>
                          <ListItem>
                            <ImageTag
                              src={`${item.thumbnail_url}`}
                              width="350px"
                            />
                          </ListItem>
                          <ListItem>
                            <div className="logo-div">
                              <LogoImage
                                src={`${item.channel.profile_image_url}`}
                                width="30px"
                              />
                            </div>
                            <div>
                              <ParaTag fontSize="15px">{item.title}</ParaTag>
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
                </>
              )}
            </HomeContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Trending

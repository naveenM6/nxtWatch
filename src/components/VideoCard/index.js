import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  VideoFrameContainer,
  VideoContainer,
  ParaEl,
  AttributesContainer,
  ChannelContainer,
  ImageEl,
  ContentContainer,
} from './styledComponents'

import AppTheme from '../../context/Theme'

import './index.css'

class VideoCard extends Component {
  state = {videoDetails: {}, channelDataObj: {}}

  async componentDidMount() {
    this.mounted = true
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const responseData = await response.json()
      const data = responseData.video_details
      const convertedData = {
        channel: data.channel,
        description: data.description,
        id: data.id,
        publishedAt: data.published_at,
        thumbnailUrl: data.thumbnailUrl,
        title: data.title,
        videoUrl: data.video_url,
        viewCount: data.view_count,
      }
      const channelData = {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        subscriberCount: data.channel.subscriber_count,
      }
      if (this.mounted) {
        await this.setState({
          videoDetails: convertedData,
          channelDataObj: channelData,
        })
      }
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    const {videoDetails, channelDataObj} = this.state
    const {videoUrl, title, viewCount, publishedAt, description} = videoDetails
    return (
      <AppTheme.Consumer>
        {values => {
          const {activeTheme} = values
          const bgColor = activeTheme === 'light' ? '#ffffff' : '#000000'
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'

          return (
            <VideoContainer bgColor={bgColor} color={color}>
              <VideoFrameContainer>
                <ReactPlayer url={videoUrl} controls className="react-player" />
                <ParaEl>
                  <b>{title}</b>
                </ParaEl>
              </VideoFrameContainer>
              <AttributesContainer>
                <ParaEl>
                  {viewCount} views . {publishedAt}
                </ParaEl>
                <ChannelContainer color={color}>
                  <ParaEl crsr="pointer">
                    <AiOutlineLike /> Like
                  </ParaEl>
                  <ParaEl crsr="pointer">
                    <AiOutlineDislike /> Dislike
                  </ParaEl>
                  <ParaEl crsr="pointer">
                    <MdPlaylistAdd /> Save
                  </ParaEl>
                </ChannelContainer>
              </AttributesContainer>
              <ChannelContainer>
                <ImageEl src={channelDataObj.profileImageUrl} />
                <ContentContainer>
                  <ParaEl>
                    <b>{channelDataObj.name}</b>
                  </ParaEl>
                  <ParaEl>{channelDataObj.subscriberCount}</ParaEl>
                </ContentContainer>
              </ChannelContainer>
              <ParaEl>{description}</ParaEl>
            </VideoContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default VideoCard

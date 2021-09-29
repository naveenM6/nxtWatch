import React from 'react'

const AppTheme = React.createContext({
  activeTheme: 'light',
  savedVideos: [],
  onChangeTheme: () => {},
})

export default AppTheme

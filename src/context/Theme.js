import React from 'react'

const AppTheme = React.createContext({
  activeTheme: 'light',
  savedVideos: [],
  onSaveVideos: () => {},
  onChangeTheme: () => {},
})

export default AppTheme

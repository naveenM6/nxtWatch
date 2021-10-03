import React from 'react'

const AppTheme = React.createContext({
  activeTheme: 'light',
  savedVideos: [],
  addSavedVideos: () => {},
  onChangeTheme: () => {},
})

export default AppTheme

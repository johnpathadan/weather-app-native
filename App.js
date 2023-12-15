import { StyleSheet, View } from 'react-native'

import CurrentWeather from './components/CurrentWeather'
import React from 'react'

// import UpcomingWeather from './components/UpcomingWeather'

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
      {/* <UpcomingWeather /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App

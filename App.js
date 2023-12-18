import { StyleSheet, View } from 'react-native'

import City from './screens/City'
import CurrentWeather from './screens/CurrentWeather'
import React from 'react'
import UpcomingWeather from './screens/UpcomingWeather'

const App = () => {
  return (
    <View style={styles.container}>
      <City />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App

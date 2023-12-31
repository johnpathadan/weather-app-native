import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import Tabs from './components/Tabs'

const App = () => {
  const [loading, setLoading] = useState(true)
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App

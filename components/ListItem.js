import { StyleSheet, Text, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import React from 'react'

const ListItem = (props) => {
  const { dt_text, min, max, condition } = props
  const { item, date, temp } = styles

  return (
    <View style={item}>
      <Feather name={'sun'} size={50} color="white" />
      <Text style={date}>{dt_text}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  }
})

export default ListItem

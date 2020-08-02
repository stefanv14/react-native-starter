import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const InitialScreen = () => {
  const title = useSelector((state) => state.global.title)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default InitialScreen

const styles = StyleSheet.create({
  text: {
    color: '#333',
  },
})

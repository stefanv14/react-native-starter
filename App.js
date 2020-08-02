import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import globalReducer from './Redux/Reducers/global'
import InitialScreen from './src/screens/InitialScreen'

const rootReducer = combineReducers({
  global: globalReducer,
})

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <InitialScreen />
    </View>
  </Provider>
)

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

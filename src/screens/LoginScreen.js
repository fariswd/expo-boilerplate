import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { useDispatch } from 'react-redux'

import { login } from '../actions/userActions'

export default () => {
  const dispatch = useDispatch()
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <TouchableOpacity onPress={() => dispatch(login())}>
        <Text>
          this is login screen
        </Text>
      </TouchableOpacity>
    </View>
  )
}
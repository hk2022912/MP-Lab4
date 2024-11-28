import { View, Text } from 'react-native'
import React from 'react'
import Typography from '../Typography'

const NameTitle = (props) => {
  return (
    <View style={{ padding: 10}}>
        <Typography text="Gwyn" size={60} isUpperCase={props.toggle} />
        <Typography text="Elan" size={30} color={props.toggle ? "red" : "gray"} />
    </View>
  )
}

export default NameTitle
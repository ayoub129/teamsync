import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../constant/colors'

const Options = () => {
  return (
    <View>
     <Text style={Styles.logo}>
        <Text>T</Text>eamSync
     </Text>
     <Image source="" />
    </View>
  )
}

export default Options

const Styles = StyleSheet.create({
    logo: {
        fontStyle: "italic",
        color: Colors.primary
    },

})
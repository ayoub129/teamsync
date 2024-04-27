import React, {  Component, useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const Input = ({Children , placeholder , style , keyboardType}) =>  {

    const [Input , setInput] = useState("")
    const onChange = () => {
        
    }

    return (
      <View style={style}>
        <TextInput placeholder={placeholder} keyboardType={keyboardType} onChange={onChange}>
            {Children}
        </TextInput>
      </View>
    )
}

export default Input

import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

export default function InstructionText({children}) {
  return (
    <View>
      <Text style={styles.instructionText}>{children}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  instructionText:{
    color:Colors.accent500,
    fontSize:24
},
})
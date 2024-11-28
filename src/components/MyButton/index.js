import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

const MyButton = ({ text, action, mode, size, color }) => {
    let style = null

    // Adjusting button sizes based on the passed size prop
    switch(size){
        case 'small':
            style = {...btnStyle.buttonSmall}
            break;
        case 'medium':
            style = {...btnStyle.buttonMedium}
            break;
        case 'large':
            style = {...btnStyle.buttonLarge}
            break;
        default:
            style = btnStyle.buttonMedium
            break;
    }

  return (
    <Button 
      contentStyle={style} 
      mode={mode} 
      onPress={() => action()} 
      color={color}  // Ensure the button color is passed
    >
        {text}
    </Button>
  )
}

export default MyButton

const btnStyle = {
    buttonSmall: {
        height: 50,
        justifyContent: 'center', // Center the text vertically
    },
    buttonMedium: {
        height: 60,
        justifyContent: 'center', // Center the text vertically
    },
    buttonLarge: {
        height: 70,
        justifyContent: 'center', // Center the text vertically
    }
}

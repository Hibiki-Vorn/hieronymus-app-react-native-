import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Entered from '../entered';

import CustomButton from '@/components/CustomButtom';

const icon = require('../../assets/images/icon.png');


export default function HomeScreen() {
  const [entered, setEntered] = useState(false)

  if (entered) {
    return <Entered onPress={() => setEntered(false)}/>
  } else {
    return <SafeAreaView style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#20232a',
    }}>
      <Image 
        source={icon} 
        style={{
          height: 200,
          width: 200,
          borderColor : '#61dafb',
          borderWidth: 2,
          borderRadius: 20,
          marginBottom: 20,
        }}/>
      <View>
        <Text 
          style={{ 
            fontSize: 24, 
            fontWeight: 'bold',
            color: '#ffffff',
            textAlign: 'center',
          }}>Welcome to</Text>
        <Text 
          style={{ 
            fontSize: 24, 
            fontWeight: 'bold', 
            color: '#61dafb',
            textAlign: 'center',
            }}>Hieronymus App</Text>
      </View>
      <View style={{ height: 20 }}/>
      <View style={{ width: 150 }}>
        <CustomButton 
          title="Enter" 
          onPress={() => setEntered(true)} 
          style={{
            backgroundColor: '#61dafb',
            paddingVertical: 10,
            borderRadius: 5,
          }}/>
      </View>
    </SafeAreaView>
  }
}
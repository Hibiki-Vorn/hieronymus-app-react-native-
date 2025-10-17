import CustomButton from '@/components/CustomButtom';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const icon = require('../assets/images/icon.png');



export default (props) => {

  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        props.onPress()
        return true
      }
    );
    return () => subscription.remove();
  }, []);

    return <>
      <StatusBar backgroundColor='#2a4ea3ff'/>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: '#20232a',
      }}>
        
        <View style={{
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#2a4ea3ff',
          
        }}>
          <CustomButton style={{
            padding: 20,
          }} title='🔙' onPress={props.onPress}/>
          <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#ffffff',
          }}>You Entered in</Text>
        </View>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={{
            fontSize: 24, 
            fontWeight: 'bold',
            color: '#5aa3b9ff',
            textAlign: 'center',
          }}>Please Wait</Text>
          <Text style={{
            fontSize: 24, 
            fontWeight: 'bold',
            color: '#ffffff',
            textAlign: 'center',
          }}>Nothing at here Now</Text>
        </View>
      </SafeAreaView>
    </>
}
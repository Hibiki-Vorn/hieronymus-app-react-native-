import * as WebBrowser from 'expo-web-browser';
import { Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '@/components/CustomButtom';

const icon = require('../../assets/images/icon.png');

const aboutPage_StyleSheet = StyleSheet.create({
  buttonStyle: {
    width: 150,
    marginTop: 20,
    backgroundColor: '#61dafb',
    paddingVertical: 10,
    borderRadius: 5,
  },
  viewStyle: {
    flex: 1, 
    justifyContent: 'center' as const, 
    alignItems: 'center' as const,
    backgroundColor: '#20232a',
  },
  textStyle: {
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center',
    color: '#ffffff',
  },
  imageStyle: {
    height: 200,
    width: 200,
    borderColor : '#61dafb',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 20,
  }
});

const openWeb = async (uri: string) => {
  await WebBrowser.openBrowserAsync(uri, {
      toolbarColor: '#6200EE',   // Android 顶部栏颜色
      showTitle: true,           // 显示网页标题
    })
  };

export default function TabTwoScreen() {

  //const [URL, setURL] = useState("")
  const setURL = openWeb

  return (
    <SafeAreaView style={aboutPage_StyleSheet.viewStyle}>
      <Image source={icon} style={aboutPage_StyleSheet.imageStyle}/>
      <Text style={aboutPage_StyleSheet.textStyle}>This is About Page</Text>
      <CustomButton 
        title="Self-introduction" 
        onPress={() => setURL("https://hieronymusblog.pages.dev/Self-introducing")}
        style={aboutPage_StyleSheet.buttonStyle}/>
      <CustomButton 
        title="Contact Info" 
        onPress={() => setURL("https://hieronymuslinks.pages.dev/")}
        style={aboutPage_StyleSheet.buttonStyle}/>
      <CustomButton 
        title="My Blog" 
        onPress={() => setURL("https://hieronymusblog.pages.dev/")}
        style={aboutPage_StyleSheet.buttonStyle}/>
    </SafeAreaView>
  )
}

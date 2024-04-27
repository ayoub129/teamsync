import React from 'react';
import { Text, View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Font } from 'react-native-vector-icons';
import montserratRegular from '../assets/fonts/Montserrat.ttf'; 

const loadFonts = async () => {
  await Font.loadAsync({
    Montserrat_Regular: montserratRegular,
  });
};


loadFonts()

const screens = [
  {
    backgroundColor: '#fff',
    image: <View></View> ,
    title: <Text style={styles.title}>Welcome to Team Sync</Text>,
    subtitle: <Text style={styles.subtitle}>Stay connected and collaborate with your team!</Text>,
  },
  {
    backgroundColor: '#fe6e58',
    image: <View></View>, 
    title: <Text style={styles.title}>Create Channels & Chat</Text>,
    subtitle: <Text style={styles.subtitle}>Discuss projects, share ideas, and stay on the same page.</Text>,
  },
  {
    backgroundColor: '#999',
    image: <View></View>, 
    title: <Text style={styles.title}>Seamless Communication</Text>,
    subtitle: <Text style={styles.subtitle}>Send private messages, participate in video calls, and more!</Text>,
  },
];

const OnboardingScreen = () => {
  return (
    <Onboarding
      pages={screens}
    />
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Montserrat_Regular',
    fontSize: 16,
  },
  subtitle: {
    fontFamily: 'Montserrat_Regular',
    fontSize: 16,
  }
})


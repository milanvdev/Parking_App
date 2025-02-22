import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {getItem} from '../../utils/AsyncStorageHelper';
import {Fonts} from '../../styles/fonts';

const SplashScreen = ({navigation}) => {
  // useEffect(() => {
  //   const checkOnboardingStatus = async () => {
  //     const isOnboardingCompleted = await getItem('onboardingCompleted');
  //     console.log(isOnboardingCompleted);

  //     const isLoggedIn = false;

  //     setTimeout(() => {
  //       if (!isOnboardingCompleted) {
  //         navigation.replace('Onboarding');
  //       } else {
  //         navigation.replace(isLoggedIn ? 'Main' : 'Auth');
  //       }
  //     }, 2000);
  //   };

  //   checkOnboardingStatus();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>SplashScreen Logo</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD613',
  },
  text: {
    fontFamily: Fonts.LexedRegular,
  },
});

export default SplashScreen;

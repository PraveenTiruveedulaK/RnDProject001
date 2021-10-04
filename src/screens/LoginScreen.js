/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
} from 'react-native';

import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GLOBAL_TEXT, LOGIN_SCREEN_TEXT} from '../languages/TextEnglish';

const {width, height} = Dimensions.get('screen');

const LoginScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const changeUserName = enteredText => {
    setUserName(enteredText.nativeEvent.text);
  };
  const changePassword = enteredText => {
    setPassword(enteredText.nativeEvent.text);
  };
  const loginButtonClick = () => {
    navigation.navigate('DrawerNav');
  };
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'dark-content' : 'light-content',
    width: width * 1,
    height: height * 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo/Logo.png')}
            style={styles.imageBackground}
          />
          <Text style={styles.appTitle}>{GLOBAL_TEXT.APP_TITLE}</Text>
          <Input
            label={LOGIN_SCREEN_TEXT.USER_NAME}
            onChange={changeUserName}
            leftIcon={<Icon name="user" size={24} color="black" />}
          />

          <Input
            label={LOGIN_SCREEN_TEXT.PASSWORD}
            onChange={changePassword}
            leftIcon={<Icon name="lock" size={24} color="black" />}
            secureTextEntry={true}
          />
          <Button
            icon={<Icon name="arrow-right" size={15} color="white" />}
            title={LOGIN_SCREEN_TEXT.LOGIN_BUTTON_TITLE}
            onPress={loginButtonClick}
            disabled={userName.length < 5 || password.length < 8}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  appTitle: {
    fontSize: 44,
    fontWeight: '600',
    marginBottom: 30,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  imageBackground: {
    width: 200,
    height: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default LoginScreen;

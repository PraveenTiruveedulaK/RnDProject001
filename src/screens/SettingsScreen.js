import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {SETTINGS_SCREEN_TEXT} from '../languages/TextEnglish';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingsScreen = () => {
  const [selectedSettingOne, setSelectedSettingOne] = useState();
  const [selectedSettingTwo, setSelectedSettingTwo] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.lableTextStyle}>
        {SETTINGS_SCREEN_TEXT.SETTING_1}
      </Text>
      <Picker
        style={{width: '100%', margin: -20, fontSize: 16}}
        selectedValue={selectedSettingOne}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedSettingOne(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript 1" value="js1" />
        <Picker.Item label="JavaScript 2" value="js2" />
        <Picker.Item label="JavaScript 3" value="js3" />
        <Picker.Item label="JavaScript 4" value="js4" />
        <Picker.Item label="JavaScript 5" value="js5" />
      </Picker>
      <Text style={styles.lableTextStyle}>
        {SETTINGS_SCREEN_TEXT.SETTING_2}
      </Text>
      <Picker
        style={{width: '100%', margin: -20, fontSize: 16}}
        selectedValue={selectedSettingTwo}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedSettingTwo(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript 1" value="js1" />
        <Picker.Item label="JavaScript 2" value="js2" />
        <Picker.Item label="JavaScript 3" value="js3" />
        <Picker.Item label="JavaScript 4" value="js4" />
        <Picker.Item label="JavaScript 5" value="js5" />
      </Picker>
      <Text style={styles.lableTextStyle}>
        {SETTINGS_SCREEN_TEXT.SETTING_3}
      </Text>
      <Input />

      <Text style={styles.lableTextStyle}>
        {SETTINGS_SCREEN_TEXT.SETTING_4}
      </Text>
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  lableTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;

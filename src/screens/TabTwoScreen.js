import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const TabTwoScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.lableTextStyle}>Tab Two Screen111</Text>
      <Picker
        style={{width: '100%', margin: -20, fontSize: 16}}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript 1" value="js1" />
        <Picker.Item label="JavaScript 2" value="js2" />
        <Picker.Item label="JavaScript 3" value="js3" />
        <Picker.Item label="JavaScript 4" value="js4" />
        <Picker.Item label="JavaScript 5" value="js5" />
      </Picker>
      <Text style={styles.lableTextStyle}>Tab Two Screen222</Text>
      <Picker
        style={{width: '100%', margin: -20, fontSize: 16}}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
      <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript 1" value="js1" />
        <Picker.Item label="JavaScript 2" value="js2" />
        <Picker.Item label="JavaScript 3" value="js3" />
        <Picker.Item label="JavaScript 4" value="js4" />
        <Picker.Item label="JavaScript 5" value="js5" />
      </Picker>
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

export default TabTwoScreen;

import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];
class DetailScreen extends Component {
  render() {
    return (
      <View>
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Icon name="user" size={24} color="black" />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailScreen;

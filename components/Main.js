import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View,
  Text, 
  TextInput,
  TouchableOpacity,
   StyleSheet } from 'react-native';


class Main extends React.Component {
  
  state = { name: '' } 
  onPress = () => {
    this.props.navigation.navigate('Chat', { name: this.state.name });
  }
onChangeText = name => this.setState({ name }); 
render() {
  return (
    <View>
      <Text style={styles.title}>Select display name</Text> 
      <TextInput
        style={styles.nameInput}
        onChangeText={this.onChangeText}
        value={this.state.name}
      />
      <TouchableOpacity onPress={this.onPress}>
        <Button type="clear" title="Get Started!" onPress={this.onPress}/>
      </TouchableOpacity>
    </View>
  );
}
  }

const offset = 24;
const styles = StyleSheet.create({
  title: { 
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
    textAlign: "center",
    alignSelf: "center"
  },
  buttonText: { 
    marginLeft: offset,
    fontSize: offset,

  },
  nameInput: { 
      height: offset * 2,
      margin: offset,
      paddingHorizontal: offset,
      borderColor: '#111111',
      borderWidth: 1,
    },
})

export default Main;
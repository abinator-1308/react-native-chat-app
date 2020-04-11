import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../Fire'


class Chat extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Konnectify!',
  });
  
  state = {
    messages: [],
  };

  // 1.
componentDidMount() {
  console.log("Mount");
  Fire.shared.on(message =>
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, message),
    }))
  );
}
// 2.
componentWillUnmount() {
  console.log("unmount");
Fire.shared.off();
}

get user() {
  // Return our name and our UID for GiftedChat to parse
  return {
    name: this.props.navigation.state.params.name,
    _id: Fire.shared.uid,
  };
}
 
render() {
  return (
    <GiftedChat
      messages={this.state.messages}
      onSend={Fire.shared.send}
      user={this.user}
    />
  );
}
}
export default Chat;


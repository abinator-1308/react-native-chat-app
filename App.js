// Import the screens
import Main from './components/Main';
import Chat from './components/Chat';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Create the navigator
const navigator = createStackNavigator({
  Konnectify: { screen: Main },
  Chat: { screen: Chat },
});

const AppNav = createAppContainer(navigator);
// Export it as the root component
export default AppNav
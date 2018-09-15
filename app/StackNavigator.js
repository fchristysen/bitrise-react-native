import { StackNavigator } from 'react-navigation';
import LoginScreen from './view/Login';
import AppsScreen from './view/Apps';
import BuildsScreen from './view/Builds';

export default StackNavigator(
	{
		Login: {
			screen: LoginScreen,
			navigationOptions: {
				header: null
			}
		}
		, Apps: {
			screen: AppsScreen,
			navigationOptions: {
				title: 'Apps'
			}
		}, Builds: {
			screen: BuildsScreen,
			navigationOptions: {
				title: 'Builds'
			}
		}
	}, {
		initialRouteName: 'Login'
	}
);
import {StackNavigator} from 'react-navigation';
import LoginScreen from './view/Login';
import AppsScreen from './view/Apps';

export default StackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        }
        , Apps: {
            screen: AppsScreen
        }
    }, {
        initialRouteName: 'Login'
    }
);
import {StackNavigator} from 'react-navigation';
import LoginScreen from './login/Login';
import BuildScreen from './build/Build';

export default StackNavigator(
    {
        Login: {
            screen: LoginScreen
        }
        , Build: {
            screen: BuildScreen
        }
    }, {
        initialRouteName: 'Login'
    }
);
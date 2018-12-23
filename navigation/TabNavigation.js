import React from 'react';
import { Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
} from 'react-navigation';

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Details!</Text>
            </View>
        );
    }
}
class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button
                    title='Go to Details'
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        )
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
                <Button
                    title='Go to Details'
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        )
    }
}

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
});
  
const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Details: DetailsScreen,
});

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Settings: SettingsStack,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const {routeName}  = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `options${focused ? '' : '-outline'}`;
                }

                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer(TabNavigator);

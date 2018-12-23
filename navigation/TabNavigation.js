import React from 'react';
import { Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button
                    title='Go to Settings'
                    onPress={() => this.props.navigation.navigate('Settings')}
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
                    title='Go to Home'
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Settings: SettingsScreen,
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

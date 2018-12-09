import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
                <Button
                    title='Go to Details'
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
                <Button
                    title='Go to Details ...again'
                    onPress={() => this.props.navigation.push('Details')}  // 如果使用this.props.navigation.navigate，将不起作用
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title='Go Home'
                    onPress={() => this.props.navigation.navigate('Home')}  // 如果使用this.props.navigation.push，将不会销毁其他页面，可以进行返回操作
                />
                <Button
                    title='Go to first screen'
                    onPress={() => this.props.navigation.popToTop()}
                />
            </View>
        );
    }
}
  
const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: "Home"  // 初始路由
    }
);
  
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

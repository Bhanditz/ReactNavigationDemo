import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
                <Button
                    title='Go to Details'
                    onPress={() => this.props.navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
    }

    render() {
        const { navigation } = this.props;

        // 也可以使用this.props.navigation.state.params，但是需要处理一些异常时情况
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title='Go to Details ...again'
                    onPress={() => this.props.navigation.push('Details', {  // 如果使用this.props.navigation.navigate，将不起作用
                        itemId: Math.floor(Math.random() * 100),
                    })}
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

import React from 'react';
/*import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
*/
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pedidos from './pages/Pedidos';
const AppStack = createStackNavigator();


export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Home" component={Pedidos} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
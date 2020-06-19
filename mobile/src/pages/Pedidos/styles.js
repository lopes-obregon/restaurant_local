import { StyleSheet, BackHandler } from 'react-native';
import Constats from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: ConstantSourceNode.statusBarHeight + 20,
    
    },
    form:{
        
        padding: 10,
        backgroundColor: 'steelBlue',
        width: 350,
        height:150

    },
    textIput:{
        height:4
    }
});
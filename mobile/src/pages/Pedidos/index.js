import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import api from '../../services/api';
import styles from './styles';
export default function Pedidos(){
    const [text, setText] = useState('');//varaivel para armazenar os pedidos
    const [mesaNum, setMesaNum ] = useState('');//varaivel para armazenar o numero da mesa que vez o pedido
    async function enviarPedido(){
        let json ={
            pedido:text,
            pedido_entregue:"false",
            mesa_ou_nome:mesaNum
        }
        try {
            await api.post('/pedidoss', json).then(response => {
                Alert.alert(response.data);
                alert("Pedido realizado com sucesso");
            })    
        } catch (error) {
            Alert.alert(error)
        }
        
    }
    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput style={styles.textIput} placeholder="Informe o numero da mesa" style={{padding:3}} onChangeText={mesaNum => setMesaNum(mesaNum)} defaultValue={mesaNum} />
                <TextInput placeholder="Digite Os Pedidos" style={{padding:40}} onChangeText={text => setText(text)} defaultValue={text} />
                <Text>
                    {text}
                </Text>
                <Button title="Enviar pedido" onPress={enviarPedido} />
            </View>
        </View>
    );
}
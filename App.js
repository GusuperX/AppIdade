import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default function App() {

const [anoAtual, setAnoatual] = useState ('');
const [anoNasc, setAnonasc] = useState ('');

function CalcularIdade(){

  const Idade = anoAtual - anoNasc;

  alert ("Você têm terá " +Idade+ " anos de idade nesse ano!");

}
  return (
    <View style={styles.container}>
      <Image style={styles.Albert_idade} resizeMode='center'
      source={require('./assets/Albert_idade.png')}></Image>

      <Text style={styles.titulo}>Descobrirei a sua idade!</Text>

      <TextInput style={styles.campoAnoatual} placeholder="Diga-me o ano atual:"
      keyboardType='numeric' onChangeText={setAnoatual}>
      </TextInput>



      <TextInput style={styles.campoAnonasc} placeholder="Diga-me seu ano de nascimento:"
      keyboardType='numeric' onChangeText={setAnonasc}>
      </TextInput>  

      <TouchableOpacity style={styles.botao} onPress ={CalcularIdade}>
        <Text style={styles.textoBotao}>
        Resposta do gênio
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#C1FAFB',
},

Albert_idade:{
  width: 300,
  height: 400,
  alignSelf: 'center',
},

titulo:{
  fontSize: 30,
  color: '#0800ff',
  fontWeight: 'bold',
  textAlign: 'center',
},

campoAnoatual:{
  backgroundColor: '#ffffff',
  borderRadius: 10,
  marginTop: 30,
  textAlign: 'center',
  padding: 15,
  fontSize: 20,
  color: '#0800ff',
  margin: 30,
},

campoAnonasc:{
  backgroundColor: '#ffffff',
  borderRadius: 10,
  marginTop: 5,
  textAlign: 'center',
  padding: 15,
  fontSize: 20,
  color: '#0800ff',
  marginLeft: 30,
  marginRight: 30,
},

botao:{
  fontSize: 20,
  textAlign: 'center',
  marginTop: 30,
  backgroundColor: '#0800ff', 
  borderRadius: 9,
  padding: 10,
  margin: 100,
},

textoBotao:{
  fontSize: 18,
  textAlign: 'center',
  color: '#fff',
},

});

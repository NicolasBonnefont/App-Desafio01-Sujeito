import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, SafeAreaView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import Slider from '@react-native-community/slider';

export default function App() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  const [status, setStatus] = useState(false)
  const [slider, setSlider] = useState(0)

  const [sexo, setSexo] = useState([
    { id: 0, sexo: '' },
    { id: 1, sexo: 'Masculino' },
    { id: 2, sexo: 'Feminino' }])


  function mostrar() {
    const dados = {
      nome,
      idade,
      sexo,
      slider,
      status
    }

    const dado = JSON.stringify(dados)
    alert(dado)

  }
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>App Banco React</Text>

      <View style={styles.campos}>
        <TextInput
          onChangeText={(e) => setNome(e)}
          style={styles.nome} placeholder='Informe seu Nome:' />

        <TextInput
          onChangeText={(e) => setIdade(e)}
          style={styles.idade} placeholder='Informe sua idade:'
          keyboardType='numeric'
        />
      </View>

      <View style={styles.containerSlider}>
        <Text> Informe o limte : {slider} </Text>
        <Slider
          style={styles.slider}
          onValueChange={(e) => setSlider(e.toFixed(0))}
          minimumValue={0}
          maximumValue={5800}
        />
      </View>

      <Picker style={styles.picker}
      >

        {sexo.map(item =>
          <Picker.Item key={item.id} label={item.sexo} value={item.id} />
        )}

      </Picker>
      <Switch
        value={status}
        onValueChange={(e) => setStatus(e)}
        style={styles.switch}
      />

      <TouchableOpacity
        onPress={() => mostrar()}
        activeOpacity={0.8} style={styles.btn}>
        <Text style={styles.btnText}>Salvar</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSlider: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-evenly'
  },
  titulo: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 28
  },
  campos: {
    marginBottom: 25,
    width: '100%'
  },
  nome: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,

  },
  idade: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5
  },
  btn: {
    width: 250,
    height: 48,
    backgroundColor: '#6497b1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 25,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  slider: {
    flexGrow: 0,
    width: 100,
    margin: 10
  },
  picker: {
    margin: 10
  },
  switch: {
    margin: 10
  }
});

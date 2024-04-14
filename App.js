import react from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, TextInput } from 'react-native'
import image from './assets/logosena.png'
import { Button } from "react-native-web";

const Separator = () => <View style={styles.separator} />;

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.Image}
      />
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subTitle}>Aprendíz ficha: 2627092 </Text>
      <Text style={styles.subTitle}> Inicia sesión</Text>
      <TextInput
        placeholder='jonnathanreys@gmail.com'
        style={styles.TextInput}
      />
      <TextInput
        placeholder='password'
        style={styles.TextInput}
      />
      <TouchableOpacity
        onPress={() => Alert.alert('Jonnathan Reyes Mosquera')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert('Ficha: 2627092')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Salir</Text>
      </TouchableOpacity>
      <Separator />
      <Text style={styles.piePagina}> No tienes cuenta? se te olvido la contraseña?</Text>
    </View>
  );

};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#f0fff0" },
  title: { 
    fontSize: 35,
    color: 'gray' 
  },
  subTitle:{
    fontSize: 20,
    color:'gray',
    justifyContent: 'center'
  },
  piePagina:{
    fontSize: 15,
    color:'gray',
    justifyContent: 'center'
  },
  Image: { height: 200, width: 200, borderRadius: 100 },
  button: {
    backgroundColor: '#008000',
    padding: 10,
    marginTop: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffff',
    marginHorizontal: 30,
    fontSize: 25,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  TextInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    paddingStart: 50,
    width: '90%',
    height: 50,
    marginTop: 25,
    borderRadius: 30,
    backgroundColor: '#fff'
  },

})

export default App;
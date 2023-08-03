import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import fetchDataAndLog from './api';

function App(): JSX.Element {
  useEffect(() => {
    fetchDataAndLog();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <FontAwesome.Button
        onPress={() => {
          console.log('logpressed');
        }}
        name="facebook"
        backgroundColor="#3b5998">
        <Text style={styles.txt}>Login with Facebook</Text>
      </FontAwesome.Button>
      <Text style={styles.instructions}>
        This is a React Native snapshot test. I'm chaanging Ui
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  device: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
    marginTop: 20,
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  txt: {fontSize: 15},
});

export default App;

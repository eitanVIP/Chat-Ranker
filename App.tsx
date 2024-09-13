import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function App() {
  return (
    <NavigationContainer><View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Chat Ranker</Text>
        <IconButton icon='cog' iconColor={'white'} size={30} onPress={() => {}}></IconButton>
      </View>
    </View></NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(18, 27, 32)',
  },

  topBar: {
    backgroundColor: 'rgb(22, 34, 40)',
    borderBottomColor: 'rgb(27, 40, 48)',
    borderBottomWidth: 2,
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    gap: 175
  },

  title: {
    color: 'white',
    textAlign: 'left',
    fontSize: 22,
    fontWeight: 'bold'
  },
});
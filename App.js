import React from 'react';
import {Text, View, TextInput, StyleSheet, Button, Switch} from 'react-native';

export default function Lab02() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [value, onChangeText] = React.useState('');
  return (
    <View
      style={styles.container}
      backgroundColor={isEnabled ? '#2a1e5c' : '#fff'}>
      <Switch
        trackColor={{false: '#ddd', true: '#fff'}}
        thumbColor={isEnabled ? '#EC4269' : '#2a1e5c'}
        ios_backgroundColor="#3e3e3e"
        style={styles.switchEditor}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.textEditor}>Namaste, {value}</Text>

      <TextInput
        style={styles.textInputEditor}
        onChangeText={text => onChangeText(text)}
        value={value}
        borderColor={isEnabled ? '#fff' : '#e6e6e6'}
        color={isEnabled ? '#fff' : '#4A5F6A'}
      />
      <Button title="Clear" onPress={() => onChangeText('')} color="#EC4269" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#2a1e5c',
    position: 'relative',
  },
  textInputEditor: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 50,
    marginBottom: 28,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 18,
  },
  switchEditor: {
    position: 'absolute',
    top: 30,
    right: 30,
  },
  textEditor: {
    color: '#ffcc4d',
    marginBottom: 24,
    fontSize: 20,
  },
});

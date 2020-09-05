import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';



const GoalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState('');

  const getGoal = (text) => {
    setEnteredGoal(text)
  };

  const goalHandler = () => {
    props.manageGoals(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible ={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
          <TextInput placeholder="objetivo de la semana"
            style={styles.input}
            onChangeText={getGoal}
          value={enteredGoal} />
          <View style={styles.buttonContainer}>
            <View style={styles.btn}>
              <Button title="Cancelar"
              color='red' onPress={props.onCancel} />
            </View>
            <View style={styles.btn}>
              <Button title="Añadir"
              onPress={goalHandler} />
            </View>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  input: {
    width: 200, 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%'
  },
  btn: {
    width: '45%'
  }
})

export default GoalInput;
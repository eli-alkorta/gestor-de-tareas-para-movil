import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isGoalAdded, setGoalAdded] = useState(false)

  const manageGoals = goalTitle => {
    setCourseGoals(courseGoals => [...courseGoals, { id: Math.random().toString(), value: goalTitle }]);
    setGoalAdded(false);
  };

  const onDelete = goalKey => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter((goal) => goal.id !== goalKey )
    })
  }

  const cancelGoal = () => {
   setGoalAdded(false)
  }

  return (
    <View style={styles.screen}>
      <Button title='Añadir nuevo objetivo semanal' onPress={() => setGoalAdded(true)}/>
      <GoalInput visible={isGoalAdded}
        manageGoals={manageGoals}
        onCancel={cancelGoal} />
      <FlatList keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={onDelete}/>
          )}>     
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

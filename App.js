import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task, done: false }]);
      setTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => toggleTask(item.id)} style={styles.checkCircle}>
        <Text style={{ color: item.done ? '#4caf50' : '#bbb', fontSize: 20 }}>
          {item.done ? '✔' : '○'}
        </Text>
      </TouchableOpacity>
      <Text style={[styles.taskText, item.done && styles.taskDone]}>{item.text}</Text>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={styles.deleteBtn}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список дел</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Добавь задачу братишка..."
          value={task}
          onChangeText={setTask}
          onSubmitEditing={addTask}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addTask}>
          <Text style={{ color: '#ffffffff', fontSize: 24 }}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{ width: '100%' }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
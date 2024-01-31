import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <View className="h-screen">
      <View className="bg-gray-800 py-5">
        <Text className="text-white text-center  mt-6 text-xl font-semibold">
          Notify
        </Text>
      </View>
      <AddTodo setTodos={setTodos} todos={todos} />

      <Todo todos={todos} setTodos={setTodos} />
      <StatusBar style="auto" />
    </View>
  );
}

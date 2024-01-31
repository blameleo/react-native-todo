import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Todo = ({ todos, setTodos }) => {
  const renderTodo = ({ item, index }) => {
    console.log(index);

    const deleteTodo = () => {
      const currentTodos = todos.filter((item, indexx) => indexx !== index);
      setTodos(currentTodos);
    };
    return (
      <View
        className="border m-4 rounded-lg bg-slate-700"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <View>
          <Text className="text-white text-lg">{item}</Text>
        </View>

        <View>
          <TouchableOpacity onPress={deleteTodo}>
            <Icon name="trash-o" color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Todo;

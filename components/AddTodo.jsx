import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const AddTodo = ({ setTodos, todos }) => {
  const [newTodo, setNewTodo] = useState("");
  const addTodo = () => {
    if (!newTodo) {
      return;
    }
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };
  return (
    <View className="  w-full py-3">
      <TextInput
        className=" w-1/2 mx-auto p-3 rounded border-2"
        placeholder="enter an activity "
        value={newTodo}
        onChangeText={(value) => setNewTodo(value)}
      ></TextInput>

      <View className="mx-auto mt-5">
        <TouchableOpacity
          className=" border bg-black  w-10 h-10  rounded-full flex justify-center items-center"
          onPress={addTodo}
        >
          <Text className=" text-white">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTodo;

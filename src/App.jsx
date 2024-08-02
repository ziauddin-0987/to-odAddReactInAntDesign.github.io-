import React, { useState } from "react";
// import { Button } from "antd";
import { Button, Input, Flex } from "antd";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
     <div className="inputWithButton">
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new to-do"
        />
        ;
        <Button type="primary" onClick={handleAddTodo}>
          add to-do
        </Button>
        </div>
      
      {/* <Input defaultValue="Combine input and button" />
      <Button type="primary">Submit</Button> */}
      {/* <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new to-do"
      /> */}
      {/* <button onClick={handleAddTodo}>Add To-Do</button> */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <Button onClick={() => handleDeleteTodo(index)}>Delete</Button>
          </li>
        //    <List.Item>
        //    <List.Item.Meta
        //      avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
        //      title={<a href="https://ant.design">{item.title}</a>}
        //      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        //    />
        //  </List.Item>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

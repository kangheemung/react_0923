import logo from './logo.svg';
import './App.css';
import { useState,useRef } from "react";
import { TodoList } from "./components/TodoList.js";
import { Child1 } from "./components/Child1.js";
import { Child2 } from "./components/Child2.js";
import {v4 as uuidv4 } from "uuid";
function App() {
  const [todos,setTodos] = useState([ {id:uuidv4(), name: "Todo1", completed: false },
  ]);
  const todoNameRef = useRef();//useRefの機能を使ったら簡単に文字列を習得することができる。
  const handleAddTodo = () => {
    //タスク追加
    console.log(todoNameRef.current.value);//確認
    const name=todoNameRef.current.value;
    setTodos ((prevTodos)=>{
      return[...prevTodos,{id:uuidv4(),name: name, completed: false}];
     
    })
     todoNameRef.current.value = null;
  };
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo =newTodos.find((todo) => todo.id === id);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <a>안녕ㅇㅅㅇ  今日何する。</a>
        <input type ="text" ref={todoNameRef}/>
        <p><button onClick={handleAddTodo}> 今日やる事</button>
        <button >よく出来ました！</button></p>
        <div>残りのリスク：0</div>
        <TodoList todos = {todos} />
        <Child1/>
        <Child2/>
      </header>
    </div>
  );
}

export default App;

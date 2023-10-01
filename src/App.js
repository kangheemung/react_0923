
import './App.css';
import { useState,useRef } from "react";
import TodoList from "./components/TodoList.js";
import { Child1 } from "./components/Child1.js";
import { Child2 } from "./components/Child2.js";
import {v4 as uuidv4 } from "uuid";
function App() {
  const [todos,setTodos] = useState([]);
  const todoNameRef = useRef();
  //useRefの機能を使ったら簡単に文字列を習得することができる。
  const handleAddTodo = () => {
    //タスク追加
    console.log(todoNameRef.current.value);//確認
    const name = todoNameRef.current.value
    //bug解消のため。
    if (name　=== "") return;
    setTodos ((prevTodos)=>{
      return[...prevTodos,{id:uuidv4(),name: name, completed: false}];
      //スプレット描き方新しいタスクをオプジェットで書く
     
    });
     todoNameRef.current.value = null;
  };
  const toggleTodo = (id) => {//idを使用してどのTodoをcompletedにするのかを考える。
    const newTodos = [...todos];//コピーをしてます。
    const todo = newTodos.find((todo) => todo.id === id);
    //find 関数（何見つけつ）なにかを見つけること
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <a>안녕ㅇㅅㅇ  今日何する。</a>
        <input type ="text" ref={todoNameRef}/>
        {/*文字列の習得*/}
        <p><button onClick={handleAddTodo}> 今日やる事</button>
        <button onClick={handleClear}>よく出来ました！</button></p>
        <div>残りのタスク：{todos.filter((todo)=>!todo.completed).length}</div>
         <div>完了した。タスク：{todos.filter((todo)=>todo.completed).length}</div>
        <TodoList todos = {todos} toggleTodo={toggleTodo}/>
        <Child1/>
        <Child2/>
      </header>
    </div>
  );
}

export default App;

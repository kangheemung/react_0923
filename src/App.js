import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { TodoList } from "./components/TodoList.js";
import { Child1 } from "./components/Child1.js";
import { Child2 } from "./components/Child2.js";
function App() {
  const [todos,setTodos] = useState([{id: 1,name:　"Todo1", completed: false },
  ]);
  
  return (
    <div className="App">
      <header className="App-header">
        <a>안녕ㅇㅅㅇ  오늘 뭐할래</a>
        <input type ="text"/>
        <p><button> 오늘 할일 추가</button>
        <button>완료한일 나를 칭찬해!</button></p>
        <div>残りのリスク：0</div>
        <TodoList todos = {todos} />
        <Child1/>
        <Child2/>
      </header>
    </div>
  );
}

export default App;

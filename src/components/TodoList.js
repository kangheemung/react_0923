import React from "react";
import {Todo} from "./Todo"

export const TodoList = ({todos}) =>{
    return (
    <div>
   
    <div>TodoList</div>
    <p>오늘할일의 리스트 존</p>
    {/*<div>{todos}</div>*/}
     {todos.map((todo) => <Todo todo={todo} key={todo}/>)}
    </div>
    );
};

import React from "react";
import {Todo} from "./Todo"

export const TodoList = ({todos}) =>{
    return (
    <div>
   
    <div>TodoList</div>
    
    {/*<div>{todos}</div>*/}
     {todos.map((todo) => <Todo todo={todo} key={todo.id}/>)}
    </div>
    );
};

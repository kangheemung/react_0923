import React from "react";

export const Todo =({ todo })=>{
    return (
        <div>
        <div>タスク</div>
        <label>
        <input type= "checkbox" checked ={false} readOnly/>
        </label>
        {todo.name}
        </div>
        );
};

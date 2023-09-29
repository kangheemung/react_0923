import React from "react";

export const Todo =({ todo })=>{
    return (
        <div>
        <div>여기가 채크박스 존</div>
        <label>
        <input type= "checkbox" cheked ={false} />
        </label>
        {todo.id}
        </div>
        );
};

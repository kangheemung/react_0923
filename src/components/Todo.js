import React from "react";

 const Todo =({ todo ,toggleTodo })=>{

    const handleTodoClick = () => {
        toggleTodo(todo.id);//todo.idは自分自身
    };
    
    return (
      <div>
        <div>タスク</div>
        <label>
        <input 
            type = "checkbox" 
            checked ={todo.completed} 
            readOnly
            onChange = { handleTodoClick }
        />
        </label>
        {todo.name}
      </div>
    );
};
export default Todo;
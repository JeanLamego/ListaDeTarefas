import React from 'react';
//props é o todo dentro do objeto nesse caso
//cada interação injeta um todo como prop no componente
const Todo = ({todo}) => {
  return (
    <div className="todo">
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
        <div>
            <button className='complete'>Completar</button>
            <button className='remove'>X</button>
        </div>
    </div>
  );
};

export default Todo
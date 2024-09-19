import { NewItem } from "./NewItem"

export function TodoList({todos, toggleTodo, deleteTodo}){
    return(
    <ul className='list'>
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <NewItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          );
        })}
      </ul>
    )
}
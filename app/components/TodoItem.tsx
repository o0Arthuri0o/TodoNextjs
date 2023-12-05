"use client"
type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
}

const TodoItem = ({id, title, complete, toggleTodo}: TodoItemProps) => {
  return (
    <>
        <li>
            <input type="checkbox" defaultChecked={complete} id={id} onChange={e => toggleTodo( id ,e.target.checked)} />
            <label htmlFor={id}>
                {title}
            </label>
        </li>
    </>
  )
}

export default TodoItem
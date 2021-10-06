import { useState } from "react"
import { Form, Button } from "react-bootstrap"
function TodoList() {
    const [todoList, setTodoList] = useState([])
    const [newItem, setNewItem] = useState("")

    function onDeleteItem(index) {
        let newTodoList = [...todoList]
        newTodoList.splice(index, 1)
        setTodoList(newTodoList)
    }

    return (
        <div>
            <Form onSubmit={(e) => {
                e.preventDefault()
                setTodoList([...todoList, newItem])
            }}>
                <Form.Group className="mb-3" controlId="todo-list">
                    <Form.Label>TODO item:</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter TODO item"
                        onChange={(event) => {
                            let text = event.target.value
                            setNewItem(text)
                        }}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => {
                        let newTodoList = [...todoList]
                        newTodoList.push(newItem)
                        setTodoList(newTodoList)
                    }}
                >
                    Add TODO item
                </Button>
                <Button
                    variant="danger"
                    type="button"
                    onClick={() => {
                        setTodoList([])
                    }}
                >
                    Clear list
                </Button>
            </Form>
            {todoList.map((element, i) => (
                <TodoItem value={element} index={i} onDeleteItem={onDeleteItem} />
            ))}
        </div>
    )
}

function TodoItem({ value, index, onDeleteItem }) {
    const [checked, setChecked] = useState(false)
    return (
        <Form.Check
            type={'checkbox'}
            id={`default-${index}`}
            label={value}
        >
            <Form.Check.Input type={'checkbox'} onChange={(e) => {
                setChecked(e.target.checked)
            }} />
            <Form.Check.Label
                style={{ textDecoration: checked ? "line-through" : "none" }}
            >
                {value}
            </Form.Check.Label>
            <Button variant="warning" size="sm" onClick={() => onDeleteItem(index)}>
                Delete
            </Button>
        </Form.Check>
    )
}

export default TodoList
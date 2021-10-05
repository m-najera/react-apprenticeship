import { useState } from "react"
import { Form, Button } from "react-bootstrap"
function TodoList() {
    const [todoList, setTodoList] = useState([])
    const [newItem, setNewItem] = useState("")
    return (
        <div>
            <Form>
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
                <TodoItem value={element} index={i} />
            ))}
        </div>
    )
}

function TodoItem({ value, index }) {
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
        </Form.Check>
    )
}

export default TodoList
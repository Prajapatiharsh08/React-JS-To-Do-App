import React, { useRef, useState } from 'react'

export default function TodoList() {
    const [state, setState] = useState([]);
    const [name, setName] = useState('');
    const [index, setIndex] = useState(null);
    const inputref = useRef(null)



    function AddText(e) {
        setName(e.target.value);
    }

    function AddTodo(e) {
        e.preventDefault();

        if (index !== null) {
            const update = state.filter((el, i) => (i !== index));
            update.splice(index, 0, name);
            setState(update);
            setIndex(null);
        }
        else {
            setState([...state, name]);
        }
        setName('');

        
    }


    function editTodo(i) {
        setName(state[i]);
        setIndex(i);
        inputref.current.focus()
    }

    function deleteTodo(i) {
        var deleteTodo = state.filter((el, index) => {
            return i !== index;
        })
        setState(deleteTodo);
    }

    return (
        <div>
            <h1>Todo App</h1>
            <form>
                <input type="text" value={name} placeholder='Add Your Task' ref={inputref} onChange={AddText} />&nbsp;
                <button onClick={AddTodo}>Add Task</button><br /><br />
            </form>

            {
                state.map((el, i) => {
                    return <li key={i}>
                        {el}&nbsp;
                        <button onClick={() => deleteTodo(i)}>Delete Task</button>&nbsp;
                        <button onClick={() => editTodo(i)}>Edit Task</button>
                    </li>
                })
            }
        </div>
    )
}

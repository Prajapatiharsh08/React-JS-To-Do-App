import React, { useRef, useState } from 'react'

export default function TodoApp() {
    const [name, setName] = useState('');
    const [state, setState] = useState([]);
    const inputref = useRef(null);

    function AddText(e) {
        setName(e.target.value);
    }

    function AddTodo(e) {
        e.preventDefault();
        setState([...state, name]);
        setName('');
    }

    function deleteTodo(i) {
        var del = state.filter((el, index) => i !== index);
        setState(del);
    }

    function editTodo(i) {
        const newName = prompt("Edit Your Item : ", state[i]);
        if (newName !== null) {
            const nameEdit = [...state];
            nameEdit.splice(i, 1, newName);
            setState(nameEdit);
        }
        inputref.current.focus()
    }

    return (
        <div>
            <h1>Todo-App</h1>
            <form>
                <input type="text" value={name} ref={inputref} placeholder='Enter Your Item...' onChange={AddText} />&nbsp;
                <button onClick={AddTodo}>Add Item</button><br /><br />
            </form>

            <ul>
                {
                    state.map((el, i) => (
                        <li key={i}>
                            {el}&nbsp;
                            <button onClick={() => deleteTodo(i)}>Delete Item</button>&nbsp;
                            <button onClick={() => editTodo(i)}>Edit Item</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

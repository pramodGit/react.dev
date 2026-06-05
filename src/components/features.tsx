import { useState } from "react";
import '../assets/features.css';
import ErrorBoundary from "../core/context/ErrorBoundary";

export const PageNotFound = () => {
    return(
        <p>404 | Page Not Found</p>
    );
};

const UpdateToDo = () => {
    const [task, setTask] = useState('');
    const [etask, setEtask] = useState('');
    const [todos, setTodos] = useState<string[]>([]);

    const addTodoList = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setTodos([...todos, task]);
        setTask('');
        setEtask(task);
        console.log(etask);
    };
    const updateTodoList = (i: number, op: string, t: string) => {
        if(op === 'delete') {
            //console.log(op);
            const newTodos = [...todos];
            newTodos.splice(i, 1);
            setTodos(newTodos);
        }
        if(op === 'edit') {
            console.log(op);
            const newTodos = [...todos];
            newTodos[i] = t;
            console.log(newTodos);
            setEtask(t);
        }
        // const updatedToDos = newTodos.filter((v, i) => )
        // newTodos.splice(i, 1);
        // setTodos(newTodos);
    };
    return(
        <>
            <ul className="to-do">
                {todos.map((t, i) => (
                    <li key={i}>
                        {t}
                        {/* <input type="text" value={etask} onChange={(e) => setEtask(e.target.value)} /> */}
                        <button onClick={() => updateTodoList(i, 'delete', t)}>Delete</button>
                        {/* <button onClick={() => updateTodoList(i, 'edit', t)}>Edit</button> */}
                    </li>
                ))}
            </ul>
            <form className="todo-form" onSubmit={addTodoList}>
                <input type="text" value={task} onChange={(e) => {
                    setTask(e.target.value)}} />
                <button type="submit">Add Todo</button>
            </form>
            <ul className="to-do">
                {todos.map((t) => (
                    <li key={t}>
                        {t}
                    </li>
                ))}
            </ul>
        </>
    )
};
export const ToDo = () => {
    return(
        <>
            <h2>To-Do :: </h2>
            <UpdateToDo />
        </>
    )
};

export const Dashboard = () => {
    return(
        <ErrorBoundary>
            <div>Dashboard</div>
        </ErrorBoundary>
    )
};
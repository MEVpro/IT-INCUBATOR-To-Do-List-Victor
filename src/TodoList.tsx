import React, {useState} from 'react';
import {FilterValuesType} from "./App";
// rsc
type TodoListPropsType = {
    title: string
    tasks: Array<TaskType> // TaskType[]
    removeTask: (taskID: string) => void
    changeTodoListFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
}
export type TaskType = {
    title: string
    isDone: boolean
    id: string
}

const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>("")
    const tasksJSX = props.tasks.map(task => {
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/><span>{task.title}</span>
                <button onClick={()=>props.removeTask(task.id)}>x</button>
            </li>
        )
    })
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input onChange={(e) => setTitle(e.currentTarget.value)} />
                <button onClick={() => {props.addTask(title)}}>+</button>
            </div>
            <ul>
                {tasksJSX}
                {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>*/}
                {/*<li><input type="checkbox" checked={true}/> <span>JS</span></li>*/}
                {/*<li><input type="checkbox" checked={false}/> <span>React</span></li>*/}
            </ul>
            <div>
                <button onClick={()=>props.changeTodoListFilter("all")}>All</button>
                <button onClick={()=>props.changeTodoListFilter("active")}>Active</button>
                <button onClick={()=>props.changeTodoListFilter("completed")}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;
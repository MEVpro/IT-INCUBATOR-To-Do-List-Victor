import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from './TodoList';

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    // BLL: - Business logic layer
    const [tasks_1, setTasks] = useState<Array<TaskType>>([
        // const tasks_1: Array<TaskType> = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'REACT', isDone: false}
    ])

    const removeTask = (taskID: number) => {
        const filteredTasks = tasks_1.filter(task => task.id !== taskID)
        setTasks(filteredTasks)
    }

    const changeTodoListFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    const [filter, setFilter] = useState<FilterValuesType>("all")
/*
    let tasksForRender = tasks_1
    if (filter === "active"){
        tasksForRender = tasks_1.filter(task => task.isDone === false)
    }
    if (filter === "completed") {
        tasksForRender = tasks_1.filter(task => task.isDone === true)
    }
*/
    let tasksForRender;
    switch (filter) {
        case "active":
            tasksForRender = tasks_1.filter(task => !task.isDone)
            break;
        case "completed":
            tasksForRender = tasks_1.filter(task => task.isDone)
            break;
        default:
            tasksForRender = tasks_1
    }



    /*
       const tasks_2: Array<TaskType> = [
           {id: 4, title: 'Meat', isDone: true},
           {id: 5, title: 'Fish', isDone: true},
           {id: 6, title: 'Beer', isDone: false}
       ]
       const tasks_3: Array<TaskType> = [
           {id: 7, title: 'JS for kids', isDone: true},
           {id: 8, title: 'Head first', isDone: true},
           {id: 9, title: "You don't know", isDone: false}
       ]
     */

    // UI: - User Interface
    return (
        <div className="App">
            <TodoList title={"What to do"} tasks={tasksForRender} removeTask={removeTask} changeTodoListFilter={changeTodoListFilter}/>
            {/*<TodoList title={"What to buy"} tasks={tasks_2}/>*/}
            {/*<TodoList title={"What to read"} tasks={tasks_3}/>*/}
        </div>
    );
}

export default App;
    /*
    <div>
        <h3>What to buy</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            <li><input type="checkbox" checked={true}/> <span>Meat</span></li>
            <li><input type="checkbox" checked={true}/> <span>Fish</span></li>
            <li><input type="checkbox" checked={false}/> <span>Beer</span></li>
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
    <div>
        <h3>What to read</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            <li><input type="checkbox" checked={true}/> <span>JS for kids</span></li>
            <li><input type="checkbox" checked={true}/> <span>Head first</span></li>
            <li><input type="checkbox" checked={false}/> <span>You don't know</span></li>
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
     */
import './App.css';
import {Header} from "./components/Header";
import {TaskList} from "./components/TaskList";
import {Footer} from "./components/Footer";
import {AddTask} from "./components/AddTask";

// conditional template

export function App() {
    let info = "hello buddy";

    return (
        <div className={'App'}>
            <Header/>
            <AddTask/>
            <TaskList info={info} title='Random' subtitle={'Test'}/>
            <Footer/>
        </div>
    );
}

export default App;

// export function App() {
//     const [tasks, setTasks] = useState(
//         [
//             {id: 213, name: "hello react", completed: true},
//             {id: 234, name: "hello react1", completed: false},
//             {id: 444, name: "hello react2", completed: true},
//         ]
//     );
//
//     function handleDelete(id) {
//         setTasks(tasks.filter(task => task.id !== id))
//         // setTasks(tasks.filter(function (task){
//         //     return task.id !== id;
//         // }))
//     }
//
//     return (
//         <div className={'App'}>
//             <h1>Task List</h1>
//             <ul>
//                 {tasks.map((task) => (
//                         <li key={task.id}>
//                             <span>{task.id} - {task.name} </span>
//                             <button onClick={() => handleDelete(task.id)} className={'delete'}>delete</button>
//                         </li>
//                     )
//                 )}
//
//                 {/*{tasks.map( function (task) {*/}
//                 {/*        return (*/}
//                 {/*            <li key={task.id}>*/}
//                 {/*                <span>{task.id} - {task.name} </span>*/}
//                 {/*                <button onClick={() => handleDelete(task.id)} className={'delete'}>delete</button>*/}
//                 {/*            </li>*/}
//                 {/*        )*/}
//                 {/*    }*/}
//                 {/*)}*/}
//             </ul>
//         </div>
//     );
// }
//
// export default App

// import {useState} from "react";
//
//
// function App() {
//     const [count, setCount] = useState(0)
//     console.log(useState(0))
//
//     function handleAdd() {
//         setCount(count => count + 1)
//         setCount(count => count + 1)
//         setCount(count => count + 1)
//     }
//
//     function handleSub() {
//         if (count > 0) {
//             setCount(count - 1)
//         }
//     }
//
//     function handleReset() {
//         setCount(0)
//     }
//
//     return (
//         <div className={'App'}>
//             <div className={'box'}>
//                 <p>{count}</p>
//                 <button onClick={handleAdd} className={'add'}>add</button>
//                 <button onClick={handleSub} className={'sub'}>sub</button>
//                 <button onClick={handleReset} className={'reset'}>reset</button>
//                 <p>{count + 10}</p>
//             </div>
//
//         </div>
//     );
//
// }
//
// export default App;

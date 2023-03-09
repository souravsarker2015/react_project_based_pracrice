import './AddTask.css'
import {useRef, useState} from "react";

export const AddTask = ({tasks, setTasks}) => {
    // const [taskValue, setTaskValue] = useState("");
    const taskRef = useRef("")
    const [progress, setProgress] = useState(false)

    const handleChange = (event) => {
        // setTaskValue(event.target.value);
        console.log(taskRef.current.value)
    }
    const handleReset = () => {
        taskRef.current.value = ""
        // setTaskValue("")
        setProgress(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskRef.current.value,
            // name: taskValue,
            completed: Boolean(progress)
        }
        console.log(task);
        setTasks([...tasks, task])
        handleReset();
    }

    return (
        <section className={'addtask'}>
            <form onSubmit={handleSubmit}>
                {/*<label htmlFor="task">Task Name :</label>*/}
                {/*<input onChange={(e) => setTaskValue(e.target.value)} type="text" name={'task'} id={'task'} placeholder={'Task Name'} autoComplete={'off'}/>*/}
                <input type="text" name={'task'} id={'task'} placeholder={'Task Name'} autoComplete={'off'} ref={taskRef}/>
                {/*<input onChange={handleChange} type="text" name={'task'} id={'task'} placeholder={'Task Name'} autoComplete={'off'} value={taskValue}/>*/}

                <select name="" id="" onChange={(e) => setProgress(e.target.value)} value={progress}>
                    <option value={'false'}>pending</option>
                    <option value={'true'}>completed</option>
                </select>
                <span onClick={handleReset} className={'reset'}>Reset</span>
                <button type={'submit'}>Add Task</button>

            </form>
            {/*<p>{taskValue}</p>*/}
            <p>{taskRef.current.value}</p>
            <p></p>
        </section>
    );
};


// import './AddTask.css'
// import {useState} from "react";
//
// export const AddTask = ({tasks, setTasks}) => {
//     const [taskValue, setTaskValue] = useState("");
//     const [progress, setProgress] = useState(false)
//
//     const handleChange = (event) => {
//         setTaskValue(event.target.value);
//     }
//     const handleReset = () => {
//         setTaskValue("")
//         setProgress(false)
//     }
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const task = {
//             id: Math.floor(Math.random() * 10000),
//             name: taskValue,
//             completed: Boolean(progress)
//         }
//         console.log(task);
//         setTasks([...tasks,task])
//         handleReset();
//     }
//
//     return (
//         <section className={'addtask'}>
//             <form onSubmit={handleSubmit}>
//                 {/*<label htmlFor="task">Task Name :</label>*/}
//                 {/*<input onChange={(e) => setTaskValue(e.target.value)} type="text" name={'task'} id={'task'} placeholder={'Task Name'} autoComplete={'off'}/>*/}
//                 <input onChange={handleChange} type="text" name={'task'} id={'task'} placeholder={'Task Name'} autoComplete={'off'} value={taskValue}/>
//
//                 <select name="" id="" onChange={(e) => setProgress(e.target.value)} value={progress}>
//                     <option value={'false'}>pending</option>
//                     <option value={'true'}>completed</option>
//                 </select>
//                 <span onClick={handleReset} className={'reset'}>Reset</span>
//                 <button type={'submit'}>Add Task</button>
//
//             </form>
//             <p>{taskValue}</p>
//         </section>
//     );
// };
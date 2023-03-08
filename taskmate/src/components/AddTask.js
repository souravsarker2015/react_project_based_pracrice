import './AddTask.css'
import {useState} from "react";

export const AddTask = () => {
    const [taskValue, setTaskValue] = useState("");

    const handleChange = (event) => {
        setTaskValue(event.target.value);
    }
    const handleReset = () => {
        setTaskValue("")
    }
    return (
        <section className={'addtask'}>
            <form>
                {/*<label htmlFor="task">Task Name :</label>*/}
                {/*<input onChange={(e) => setTaskValue(e.target.value)} type="text" name={'task'} id={'task'} placeholder={'Task Name'} autoComplete={'off'}/>*/}
                <input onChange={handleChange} type="text" name={'task'} id={'task'} placeholder={'Task Name'} autoComplete={'off'} value={taskValue}/>


                <button type={'submit'}>Add Task</button>
                <span onClick={handleReset} className={'reset'}>Reset</span>
            </form>
            <p>{taskValue}</p>
        </section>
    );
};
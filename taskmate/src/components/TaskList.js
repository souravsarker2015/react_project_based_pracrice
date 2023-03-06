import {useState} from "react";
import {TaskCard} from "./TaskCard";
import {BoxCard} from "./BoxCard";

export const TaskList = ({info, title, subtitle}) => {
    const [tasks, setTasks] = useState(
        [
            {id: 213, name: "hello react", completed: true},
            {id: 234, name: "hello react1", completed: false},
            {id: 444, name: "hello react2", completed: true},
        ]
    );

    const [show, setShow] = useState(true)

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id))
        // setTasks(tasks.filter(function (task){
        //     return task.id !== id;
        // }))
    }

    return (
        <>
            <h1>Task List {title} {subtitle}</h1>
            <ul>
                <button className={'trigger'} onClick={() => setShow(!show)}>toggle</button>

                {show && tasks.map((task) => (
                        <TaskCard info={info} key={task.id} task={task} handleDelete={handleDelete}/>
                    )
                )}


                {/*{tasks.map( function (task) {*/}
                {/*        return (*/}
                {/*            <li key={task.id}>*/}
                {/*                <span>{task.id} - {task.name} </span>*/}
                {/*                <button onClick={() => handleDelete(task.id)} className={'delete'}>delete</button>*/}
                {/*            </li>*/}
                {/*        )*/}
                {/*    }*/}
                {/*)}*/}
            </ul>
            <BoxCard result={'success'}>
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, omnis?</p>
            </BoxCard>

            <BoxCard result={'warning'}>
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, omnis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur cum deserunt dicta ea eum eveniet fugiat incidunt maiores sequi!</p>
                <p>Lorem ipsum dolor sit.</p>

            </BoxCard>

            {/*<div className="box success">*/}
            {/*    <p className="title">Lorem ipsum dolor sit amet.</p>*/}
            {/*    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, omnis?</p>*/}
            {/*</div>*/}
            {/*<div className="box warning">*/}
            {/*    <p className="title">Lorem ipsum dolor sit amet.</p>*/}
            {/*    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, omnis?</p>*/}
            {/*</div>*/}
            {/*<div className="box alert">*/}
            {/*    <p className="title">Lorem ipsum dolor sit amet.</p>*/}
            {/*    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, omnis?</p>*/}
            {/*</div>*/}
        </>
    );
};
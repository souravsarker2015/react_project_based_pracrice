export const TaskCard = ({task, handleDelete, info}) => {
    return (
        <li className={task.completed ? "completed" : 'incomplete'}>
            <span>{task.id} - {task.name} - {info}</span>
            <button onClick={() => handleDelete(task.id)} className={'delete'}>delete</button>
        </li>
    );
};

// export const TaskCard = (props) => {
//     return (
//         <li key={props.task.id} className={props.task.completed ? "completed" : 'incomplete'}>
//             <span>{props.task.id} - {props.task.name} </span>
//             <button onClick={() => props.handleDelete(props.task.id)} className={'delete'}>delete</button>
//         </li>
//     );
// };


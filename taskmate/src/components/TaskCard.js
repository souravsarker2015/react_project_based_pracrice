import './taskCard.css'
import styles from './TaskCard.module.css'

export const TaskCard = ({task, handleDelete, info}) => {
    return (
        <div className={'taskcard'}>
            <li className={`${task.completed ? "completed" : 'incomplete'}`}>
                //style in module
                <span className={styles.title}>{task.id} - {task.name} - {info}</span>
                <button onClick={() => handleDelete(task.id)} className={'delete'}>delete</button>
            </li>
        </div>

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


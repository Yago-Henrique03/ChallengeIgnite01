import { Trash } from 'phosphor-react';
import styles from './Activity.module.css';

export function Activity({task, tasks, setTasks}) {
    function handleDeleteTask(taskId) {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
    }

    function handleToggleTaskCompletion(taskId) {
        const task = tasks.find(task => task.id === taskId)
        
        if (!task) return
        
        task.completed = !task.completed
        setTasks(prevState => [...prevState.filter( task => task.id !== taskId), task])
    }

    return (
        <div className={styles.content}>
            <div>
                <input onChange={() => handleToggleTaskCompletion(task.id)} type="checkbox" className={styles.checkbox} />
                <p>{task.content}</p> 
            </div>
            <button
                onClick={() => handleDeleteTask(task.id)}
            >
                <Trash size={24}/>
            </button>
        </div>
    )
}

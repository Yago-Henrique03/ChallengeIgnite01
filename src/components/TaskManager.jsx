import { PlusCircle } from 'phosphor-react';
import styles from './TaskManager.module.css';

export function TaskManager({ setTasks }) {

    function handleAddTask(e) {
        e.preventDefault()
        if (e.target.task.value === "") { 
            alert("Não é possivel adicionar com o campo vazio")
            return            
        }

        setTasks(prevState => [...prevState, { id: e.target.task.value, content: e.target.task.value, completed: false}])
        e.target.task.value = ""
    }

    return (
            <form className={styles.content} onSubmit={(e) => handleAddTask(e)}>
                <input
                    name="task"
                    placeholder="Adicione uma tarefa"
                    className={styles.input}
                />
                <button className={styles.button}>
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>
    )
}
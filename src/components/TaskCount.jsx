import styles from './TaskCount.module.css';

export function TaskCount({ tasks}){

    const tasksDone = tasks.reduce((acc, task) => {

        if(task.completed) {
            acc = acc + 1;
        } 

        return acc
    }, 0)

    return (
        <div className={styles.content}>
            <div className={styles.CreateCount}>
                <strong>Tarefas Criadas</strong>
                <p>{tasks.length}</p>
            </div>
            <div className={styles.ConcludeCount}>
                <strong>Concluídas</strong>
                <p>{`${tasksDone} de ${tasks.length}`}</p>
            </div>
        </div>
    )
}
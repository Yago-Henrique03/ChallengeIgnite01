import styles from './Tasks.module.css';
import Clipboard from '../assets/Clipboard.png';
import { TaskCount } from './TaskCount';
import { Activity } from './Activity';

export function Tasks({tasks, setTasks}) {
    console.log(tasks)
    return (
        <div className={styles.wrapper}>
            <TaskCount tasks={tasks} />
            <div className={styles.listContent}>
                {
                    tasks.length > 0 ? (
                        <div className={styles.tasksListsWrapper} >
                            {tasks?.map(task => <Activity setTasks={setTasks} task={task} tasks={tasks} key={task.id}/>) }
                        </div>
                    )
                    : (
                        <div className={styles.noTasksListWrapper}>
                            <img src={Clipboard} alt="" />
                            <div>
                                <strong>Você não tem tarefas cadastradas</strong>
                                <p>Crie e organize seus itens a fazer</p>
                            </div>
                        </div>
                    )

                }
            </div>
        </div>
    )
}
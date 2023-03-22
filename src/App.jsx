// React 
import { useState } from 'react';

// Components
import { Header } from './components/Header';
import { TaskManager } from './components/TaskManager';
import { TaskCount } from './components/TaskCount';
import { Tasks } from './components/Tasks';
//Styles
import './global.css';
import styles from './App.module.css';


function App() {
  const [tasks, setTasks] = useState([])

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <TaskManager setTasks={setTasks} />
        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
}

export default App

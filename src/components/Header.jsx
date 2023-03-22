import styles from './Header.module.css';

import IgniteTodo from '../assets/Ignite-Todo.svg';


export function Header() {
    return (
        <header className={styles.header}>
            <img src={IgniteTodo} alt="Logotipo To-do" />
        </header>
    )
}
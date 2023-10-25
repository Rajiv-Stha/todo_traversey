import React from 'react'
import styles from "./task.module.css"
import {GiCrossMark} from "react-icons/gi"

const Task = () => {
  return (
    <div className={styles.task_box}>
    <p>doctor's appoitment</p>
    <GiCrossMark className={styles.deleteTask}/>

      
    </div>
  )
}

export default Task

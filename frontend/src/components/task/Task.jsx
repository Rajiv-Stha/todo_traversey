import React from 'react'
import styles from "./task.module.css"
import {GiCrossMark} from "react-icons/gi"

const Task = ({item, handleDelete}) => {
  return (
    <div className={styles.task_box} style={{borderColor:item.isChecked?'green':'white'}}>
    <p>{item.task}</p>
    <button onClick={()=>handleDelete(item.id)} className={styles.deleteBtn}>

    <GiCrossMark className={styles.deleteIcon}/>
    </button>

      
    </div>
  )
}

export default Task

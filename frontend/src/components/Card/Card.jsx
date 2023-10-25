import React, { useState } from 'react'
import styles from  "./card.module.css"
import Task from '../task/Task'
import AddTask from '../addTask/AddTask'

const Card = () => {
  const [state, setState] = useState(false)
  const [clickBtn, setClickBtn] = useState("Add")
 
  const handleAdd = ()=>{
    setState(true)
    console.log(state, "state")
    setClickBtn("Close")

  }
  const handleClose = ()=>{
    setState(false)
    setClickBtn("Add")
  }
  return (
    <div className={styles.card_container}>

      <div className={styles.card_header}>
      <h1>Task Tracker</h1>

      <button className={styles.add_btn} onClick={state?handleClose: handleAdd}>{clickBtn}</button>
      </div>
      <div className={styles.task_wrapper}>
      
      {
        
        state? <AddTask/>: null
      }
     
      <Task/>
      <Task/>
      </div>
    </div>
  )
}

export default Card

import React, { useState } from 'react'
import styles from "./addtask.module.css"
const AddTask = () => {
  const [task, setTask] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckboxChange = ()=>{
    setIsChecked(!isChecked)
  }

  const handleTaskInputChange = (e)=>{
    setTask(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    alert("Submit")
  }
  return (
    <>

    <form className={styles.form} onSubmit={handleSubmit}>
    <div className={styles.task_wrapper}>

        <label>Task</label>
        <input type='text' placeholder='Add task' onChange={handleTaskInputChange} value={task}/>
    </div>
    <div className={styles.reminder_box}>

    <label htmlFor='reminder'>Set reminder</label>
    <input type='checkbox' id='reminder' checked={isChecked} onChange={handleCheckboxChange}/>
   
    </div>
    <button type='submit' className={styles.saveTask_btn}>Save task</button>
    </form>
    </>
      
  )
}

export default AddTask

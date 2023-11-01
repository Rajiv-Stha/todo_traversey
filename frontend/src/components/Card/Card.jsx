import React, { useState } from 'react'
import styles from  "./card.module.css"
import Task from '../task/Task'
import AddTask from '../addTask/AddTask'

const Card = () => {
  const [state, setState] = useState(false)
  const [clickBtn, setClickBtn] = useState("Add")
  const [allTask, setAllTask] = useState([])
  const [task, setTask] = useState("")
  const [isChecked, setIsChecked] = useState(false)

  const handleDelete = (id)=>{
    const filtered = allTask.filter(item=>item.id!== id)
    setAllTask(filtered)
  }

 
  const handleAdd = ()=>{
    setState(true)
    console.log(state, "state")
    setClickBtn("Close")

  }
  const handleClose = ()=>{
    setState(false)
    setClickBtn("Add")
  }

  const handleSubmit = (e)=>{
    let newTask = {
      task,
      id:new Date(),
      isChecked
    }
    e.preventDefault()
    setAllTask((prev)=>{
      return [...prev, newTask]
    })
    setTask("")
  }
  console.log(allTask)
  return (
    <div className={styles.card_container}>

      <div className={styles.card_header}>
      <h1>Task Tracker</h1>

      <button className={styles.add_btn} onClick={state?handleClose: handleAdd}>{clickBtn}</button>
      </div>
      <div className={styles.task_wrapper}>
      
      {
        
        state? <AddTask handleSubmit={handleSubmit} setTask={setTask} task={task} isChecked={isChecked} setIsChecked={setIsChecked} />: null
      }
     {
      allTask.map((item)=>{
        return <Task item={item} task={task} handleDelete={handleDelete} key={item.id}/>
      })
     }
      </div>
    </div>
  )
}

export default Card

import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

const TaskList = () => {

const tasks=useSelector((store)=>store.task)

  return (
    <div>
    {tasks.map((el,i)=> <Task key={i} task={el}/> )}
     
    </div>
  );
}

export default TaskList;

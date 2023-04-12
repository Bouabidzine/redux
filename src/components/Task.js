import React from 'react';
import { useDispatch } from 'react-redux';
import { delateTask } from '../redux/TaskSlice/TaskSlice';

const Task = ({task}) => {
    const dispatch = useDispatch()
  return (
    <div className='dispach'>
      <h3>{task.title}</h3>
      <button>Update</button>
      <button onClick={()=> dispatch(delateTask(task))}>Close</button>
    </div>
  );
}

export default Task;

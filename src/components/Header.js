import React, { useState } from 'react';
import { addTask } from '../redux/TaskSlice/TaskSlice';
import { useDispatch } from 'react-redux';

const Header = () => {

  const [newTask, setNewTask] = useState({title:""})
  const dispatch = useDispatch()
  return (
    <div className='taskcontent'>
      <input defaultvalue={newTask.title} type="text" placeholder='todo' onChange={(e)=> setNewTask({...newTask, title: e.target.value})}></input>
      <button onClick={()=> {dispatch(addTask({...newTask, isDone:false, id:Math.floor(Math.random()*10000000)}))
      setNewTask({title:""})}}>Add</button>
    </div>
  );
}

export default Header;

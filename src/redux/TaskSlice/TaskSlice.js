import { createSlice } from '@reduxjs/toolkit'


const initialState = [{id:1, title:"Task1", isDone:false}]
export const taskSlice = createSlice({
  name : 'task',
  initialState,
  reducers: {
 
   addTask : (state, action) => { 
   state.push(action.payload)
   }
   
},
delateTask :(state, action) =>
        { return  state.filter((el)=>el.id !== action.payload.id)}
})


export const { addTask, delateTask } = taskSlice.actions

export default taskSlice.reducer
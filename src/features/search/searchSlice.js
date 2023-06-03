import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: '',
  status: 'idle',
  data: ['Learn English','Learn React js','Learn CSS and HTML', 'Back end','frontend'],
  result: []
};


export const searchSlice = createSlice({
  name: 'search',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

    // bla bla 
    handleSeatch:(state, action) => {
      const found = initialState.data.toString().toLocaleLowerCase().replace(/\s/g, '').split(',')

      let index = [];
      for(let i=0; i< found.length; i++){
        if(found[i].indexOf(action.payload) !== -1){

          index.push(i)
        }
      }

      state.result = index
    }
  },

});

export const { increment, handleSeatch } = searchSlice.actions;



export default searchSlice.reducer;

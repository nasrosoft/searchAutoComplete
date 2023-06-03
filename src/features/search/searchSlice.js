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
    handleSearch:(state, action) => {
      const found = initialState.data.toString().toLocaleLowerCase().replace(/\s/g, '').split(',')
      let index = [];

      // found.includes(`/^${action.payload}.*/`)

      for(let i=0; i< found.length; i++){

        if(found[i].indexOf(action.payload) !== -1){
          for(let j=0; j< action.payload.length; j++){
            if(found[i][j] === action.payload[j]){
              index.push(i)
              console.log('index:', index)
            }
          }


        }
      }
      state.result = [...new Set(index)]
    }
  },

});

export const { increment, handleSearch } = searchSlice.actions;



export default searchSlice.reducer;

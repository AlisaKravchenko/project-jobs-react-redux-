import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: []
}

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
      setJobs(state, action){
        state.jobs = action.payload
      },
      asyncSetJobs(){}
    }
})

export const {setJobs, asyncSetJobs} = jobsSlice.actions
export default jobsSlice.reducer

// export const increment = createAction('increment')

// export const jobsReducer = createReducer({count: 1}, {
//     [increment]: (state) => {
//         state.count = state.count + 3
//       //   console.log(current(state.count))
//     }
// })
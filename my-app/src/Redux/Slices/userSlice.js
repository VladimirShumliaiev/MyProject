import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function(_,{rejectWithValue}){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')

            if(!response.ok) {
                throw new Error('ERROR')
            }

            return response.json()

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchDeleteUser = createAsyncThunk(
    'users/fetchDeleteUser',
    async (id,{rejectWithValue,dispatch}) => {
        try {
         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'DELETE'
            })
            if(!response.ok) {
                throw new Error('ERROR 2')
            }

            dispatch(deleteUser({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)



const userSlice = createSlice({
    name: 'users',
    initialState: {
        user: [],
        status: null,
        error: null,
    },
    reducers: {
        deleteUser(state, action){
            state.user = state.user.filter(e => e.id !== action.payload.id)
        },
    },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.user = action.payload
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [fetchDeleteUser.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const {deleteUser} = userSlice.actions
export default userSlice.reducer
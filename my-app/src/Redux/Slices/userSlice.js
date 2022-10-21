import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_,{rejectWithValue}) =>{
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
    async  (id,{rejectWithValue,dispatch}) => {
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

export const fetchPhotoUser = createAsyncThunk(
    'users/fetchPhotoUser',
    async (_,{rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=15')
            if(!response.ok){
                throw new Error('ERROR PHOTO')
            }
            return response.json()

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const setError = (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
    }



const userSlice = createSlice({
    name: 'users',
    initialState: {
        user: [],
        photo: [],
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
        [fetchUsers.rejected]: setError,
        [fetchDeleteUser.rejected]: setError,

        [fetchPhotoUser.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchPhotoUser.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.photo = action.payload
        },
        [fetchPhotoUser.rejected]: setError,
    }
})

const {deleteUser} = userSlice.actions
export default userSlice.reducer
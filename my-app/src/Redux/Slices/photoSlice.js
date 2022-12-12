import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchPhoto = createAsyncThunk(
    'photo/fetchPhoto',
    async (_,{rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=50')

            if (!response.ok) {
                throw new Error('Error fetchPhoto')
            }

            return response.json()

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchPhotoDelete = createAsyncThunk(
    'photo/fetchPhotoDelete',
    async (id,{rejectWithValue,dispatch}) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
                method: 'DELETE'
            })
            if (!response.ok) {
                throw new Error('Error fetchPhoto')
            }

            dispatch(deletePhoto({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const photoSlice = createSlice({
    name: 'photo',
    initialState: {
        photo: [],
        status: null,
        error: null,
    },

    reducers: {
        deletePhoto(state, action){
            state.photo = state.photo.filter(e => e.id !== action.payload.id)
        },
    },
    extraReducers: {
        [fetchPhoto.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [fetchPhoto.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.photo = action.payload
        },
        [fetchPhoto.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [fetchPhotoDelete.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

    }
})

 const {deletePhoto} = photoSlice.actions;
export default photoSlice.reducer
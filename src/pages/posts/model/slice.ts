import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './types';
import { Post } from '../../../shared';

const initialState: State = {
	post: {
		userId: 0,
    	id: 0,
    	title: '',
    	body: '',
	},
};

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		setPost(state, action: PayloadAction<Post>) {
			state.post = action.payload;
		},
	},
});

export const postReducer = postSlice.reducer;
export const { setPost } = postSlice.actions;

import {createAsyncThunk} from '@reduxjs/toolkit';
import * as service from './posts-service';

export const updatePostThunk = createAsyncThunk(
    "posts/updatePost",
async (post, currentUser) =>
    await service.likePost(post, currentUser)
)

export const createPostThunk = createAsyncThunk(
    "posts/updatePost",
    async (trackId, userId) =>
        await service.createPost(trackId, userId)
)


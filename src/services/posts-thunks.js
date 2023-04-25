import {createAsyncThunk} from '@reduxjs/toolkit';
import * as service from './posts-service';

export const updatePostThunk = createAsyncThunk(
    "posts/updatePost",
async (post) =>
    await service.likePost(post)
)


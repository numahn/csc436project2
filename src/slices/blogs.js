import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    focus: [],
    loading: false,
    error: null,
};

export const getAllBlogs = createAsyncThunk('blogs/getall', async () => {
    const res = await fetch('http://localhost:3001/v1/api/posts');
    return res.json();
});

export const createBlog = createAsyncThunk('blogs/create', async ({title, content}) => {
    const res = await fetch('http://localhost:3001/v1/api/posts', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: title,
            content: content,
        }),
    });

    return res.json();
});

export const getBlog = createAsyncThunk('blogs/get', async ( id ) => {
    const res = await fetch(`http://localhost:3001/v1/api/posts/${id}`);
    return res.json();
});

export const updateBlog = createAsyncThunk('blogs/update', async( { id, title, content } ) => {
    const res = await fetch(`http://localhost:3001/v1/api/posts/${id}`, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, content}),
    });
    return res.json();
});

export const deleteBlog = createAsyncThunk('blogs/delete', async( id ) => {
    const res = await fetch(`http://localhost:3001/v1/api/posts/${id}`, {
        method: "DELETE",
    });
    return res.json();
});

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllBlogs.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getAllBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.data = [];
            })

            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.data = action.payload;
            })

            .addCase(getBlog.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(getBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.focus = action.payload
            })

            .addCase(createBlog.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(createBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(createBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.data = [...state.data, action.payload]

                // const index = state.findIndex(blog => blog.id === action.payload.id);
                // if (index === -1)
                //     state.data.push(action.payload);
            })

            .addCase(updateBlog.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(updateBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(updateBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
            })

            .addCase(deleteBlog.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(deleteBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(deleteBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;

                const index = state.data.findIndex(blog => blog.id === action.payload.id);
                state.data.splice(index, 1);
            })
    },
});

const { reducer } = blogSlice;
export default reducer;
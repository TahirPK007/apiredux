import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
  const response = await fetch('http://10.0.2.2/Testing/api/Redux/Getdata');
  return response.json();
});

export const deleteTodos = createAsyncThunk('deleteTodos', async id => {
  const response = await fetch(
    `http://10.0.2.2/Testing/api/Redux/Deletedata/${id}`,
    {
      method: 'DELETE',
    },
  );
  return response.json();
});

export const createTodos = createAsyncThunk(
  'createTodos',
  async ({name, age}) => {
    const response = await fetch(`http://10.0.2.2/Testing/api/Redux/Adddata`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: `${name}`,
        age: `${age}`,
      }),
    });
    return response.json();
  },
);

export const updateTodos = createAsyncThunk(
  'updateTodos',
  async ({id, name, age}) => {
    const response = await fetch(
      `http://10.0.2.2/Testing/api/Redux/Updatedata?id=${id}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: `${name}`,
          age: `${age}`,
        }),
      },
    );
    return response.json();
  },
);

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
    builder.addCase(deleteTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(deleteTodos.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
    builder.addCase(createTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(createTodos.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
    builder.addCase(updateTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(updateTodos.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;

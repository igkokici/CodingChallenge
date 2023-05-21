import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchTopics } from '../api'

interface Topic {
  id: string;
  name: string;
}

interface TopicState {
  topics: Topic[];
  loading: boolean;
  error: string | null;
}

const initialState: TopicState = {
  topics: [],
  loading: false,
  error: null,
};

export const fetchTopicsAsync = createAsyncThunk(
  'topics/fetchTopics',
  async () => {
    try {
      const response = await fetchTopics()
      return response
    } catch (error) {
      throw Error('Failed to fetch topics')
    }
  }
);

const topicSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopicsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopicsAsync.fulfilled, (state, action: PayloadAction<Topic[]>) => {
        state.loading = false;
        state.topics = action.payload;
      })
      .addCase(fetchTopicsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch topics';
      });
  },
});

export default topicSlice.reducer;
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchTopicDetails } from '../api';

interface TopicDetailsState {
    topic: Topic | null;
    loading: boolean;
    error: string | null;
  }

interface Topic {
    id: string;
    category: string;
    title: string;
    description: string
    articles?: Array<
        {
            id: string,
            title: string;
            shortDescription: string;
            readingTime: number;
            image: null
        }
    >
    
}

export const fetchTopicDetailsAsync = createAsyncThunk(
  'topicDetails/fetchTopicDetails',
  async (topicId: string) => {
    try {
      const topicDetails = await fetchTopicDetails(topicId);
      return topicDetails;
    } catch (error) {
      throw new Error('Failed to fetch topic details');
    }
  }
)

const initialState: TopicDetailsState = {
    topic: null,
    loading: false,
    error: null,
  };

  const topicDetails = createSlice({
    name: 'topic',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchTopicDetailsAsync.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchTopicDetailsAsync.fulfilled, (state, action: PayloadAction<Topic>) => {
          state.loading = false;
          state.topic = action.payload;
        })
        .addCase(fetchTopicDetailsAsync.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to fetch topic details';
        });
    },
  });

  export default topicDetails.reducer
  


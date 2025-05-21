// Notes Slice

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
  isLoading: false,
  error: null,
  currentNote: null
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    // Start loading notes
    fetchNotesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    // Successfully fetched notes
    fetchNotesSuccess: (state, action) => {
      state.notes = action.payload;
      state.isLoading = false;
    },
    // Error fetching notes
    fetchNotesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Add a new note to the state
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    // Update a note in the state
    updateNote: (state, action) => {
      const index = state.notes.findIndex(
        (note) => note._id === action.payload._id
      );
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    },
    // Remove a note from the state
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note._id !== action.payload);
    },
    // Set current note being edited
    setCurrentNote: (state, action) => {
      state.currentNote = action.payload;
    },
    // Clear current note
    clearCurrentNote: (state) => {
      state.currentNote = null;
    }
  }
});

export const {
  fetchNotesStart,
  fetchNotesSuccess,
  fetchNotesFailure,
  addNote,
  updateNote,
  deleteNote,
  setCurrentNote,
  clearCurrentNote
} = noteSlice.actions;

export default noteSlice.reducer;

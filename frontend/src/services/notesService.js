// src/services/notesService.js
import { get, post, put, del } from './api';

export const getAllNotes = async () => {
  const response = await get('/api/v1/notes/');
  return response.data;
};

export const getSingleNote = async (id) => {
  const response = await get(`/api/v1/notes/${id}`);
  return response.data;
};

export const createNote = async (noteData) => {
  const response = await post('/api/v1/notes/', noteData);
  return response.data;
};

export const updateNote = async (id, noteData) => {
  const response = await put(`/api/v1/notes/${id}`, noteData);
  return response.data;
};

export const deleteNote = async (id) => {
  const response = await del(`/api/v1/notes/delete/${id}`);
  return response.data;
};

import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { Notes } from '../models/note.model.js';

const createNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    throw new ApiError('Please provide all required fields', 400);
  }

  const note = await Notes.create({
    title,
    content,
    userId: req.user._id
  });

  return res
    .status(201)
    .json(new ApiResponse(201, note, 'Notes created successfully'));
});

const editNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    throw new ApiError('Please provide all required fields', 400);
  }

  const note = await Notes.findById(req.params.id);

  if (!note) {
    throw new ApiError('Note not found', 404);
  }

  if (note.userId.toString() !== req.user._id.toString()) {
    throw new ApiError('Unauthorized: You cannot edit this note', 403);
  }

  note.title = title;
  note.content = content;
  await note.save();

  return res
    .status(200)
    .json(new ApiResponse(200, note, 'Note updated successfully'));
});

const deleteNote = asyncHandler(async (req, res) => {
  const note = await Notes.findById(req.params.id);

  if (!note) {
    throw new ApiError('Note not found', 404);
  }

  if (note.userId.toString() !== req.user._id.toString()) {
    throw new ApiError('Unauthorized: You cannot delete this note', 403);
  }

  await note.remove();

  return res
    .status(200)
    .json(new ApiResponse(200, null, 'Note deleted successfully'));
});

const singleNote = asyncHandler(async (req, res) => {
  const note = await Notes.findById(req.params.id);

  if (!note) {
    throw new ApiError('Note not found', 404);
  }

  if (note.userId.toString() !== req.user._id.toString()) {
    throw new ApiError('Unauthorized: You cannot view this note', 403);
  }

  return res
    .status(200)
    .json(new ApiResponse(200, note, 'Note fetched successfully'));
});

const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Notes.find({ userId: req.user._id }).sort({
    createdAt: -1
  });

  return res
    .status(200)
    .json(new ApiResponse(200, notes, 'Notes fetched successfully'));
});

export { createNote, editNote, deleteNote, singleNote, getAllNotes };

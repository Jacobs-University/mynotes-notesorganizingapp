import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  title:String,
  subject:String,
  keywords:String,
  note:String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Note = mongoose.model('Note', noteSchema);

export default Note;

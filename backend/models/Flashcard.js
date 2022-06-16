const { Schema, model } = require('mongoose');

const flashcardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 280,
    },
    cardBody: {
      type: String,
      required: true,
      maxlength: 1000,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Flashcard = model('Flashcard', flashcardSchema);

module.exports = Flashcard;

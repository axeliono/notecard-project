const { Schema, model } = require('mongoose');
const flashcardSchema = require('../models/Flashcard');

const deckSchema = new Schema(
  {
    deckName: {
      type: String,
      required: true,
      maxlength: 280,
    },
    deckCards: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Flashcard'
      }
    ],
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

const Deck = model('Deck', deckSchema);

module.exports = Deck;

const { Deck, Flashcard, User } = require('../models');

const resolvers = {
  Query: {
    decks: async (parent, args) => {
      return await Deck.find().populate('flashcard');
    },

    deck: async (parent, args) => {
      return Deck.findById(args._id);
    },

    user: async (parent, args) => {
      return User.findOne(args.username);
    },

    users: async (parent, args) => {
      return User.find();
    },

    userDecks: async (parent, args) => {
      return await User.findOne({
        username: args.username,
      }).populate({
        path: 'decks',
        populate: {
          path: 'Flashcard',
        },
      });
    },

    flashcards: async (parent, args) => {
      return Flashcard.find();
    },
  },

  // Mutation: {

  // }
};

module.exports = resolvers;

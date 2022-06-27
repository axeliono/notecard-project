const { Deck, Flashcard, User } = require('../models');

const resolvers = {
  Query: {
    decks: async (parent, args) => {
      return Deck.find();
    },

    deck: async (parent, args) => {
      return Deck.findById(args._id);
    },

    user: async (parent, args) => {
        return User.findOne(args.username)
    },

    users: async (parent, args) => {
        return User.find();
    },

    
  },
};

module.exports = resolvers;

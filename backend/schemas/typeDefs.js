const {gql} = require("apollo-server-express");

const typeDefs = gql`
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        userDecks(username: String): User
        decks: [Deck]
        deck(_id: ID!): Deck
        flashcards: [Flashcard]
    }

    # type Mutation {
    #     # addUser(username: String!, email: String!, password: String!): User
    #     # addDeck(deckName: String!, deckCards: [Flashcard]!): Deck
    #     # createFlashcard(title: String!, cardBody: String!): Flashcard
    # }

    type User {
        _id: ID
        username: String
        email: String
        decks: [Deck]
    }

    type Deck {
        _id: ID
        deckName: String
        deckCards: [Flashcard]
        createdAt: String
    }

    type Flashcard {
        _id: ID
        title: String
        cardBody: String
        createdAt: String
    }
`

module.exports = typeDefs
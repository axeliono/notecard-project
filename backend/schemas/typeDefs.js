const {gql} = require("apollo-server-express");

const typeDefs = gql`
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        decks(username: String): [Deck]
        deck(_id: ID!): Deck
    }

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
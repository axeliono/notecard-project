const { Schema } = require('mongoose');

const flashcardSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: 280
        },
        cardBody: {
            type: String,
            required: true,
            maxlength: 1000,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        deck: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Deck'
            }
        ]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = flashcardSchema;
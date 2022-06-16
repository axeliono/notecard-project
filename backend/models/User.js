const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      maxlength: 280,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      maxlength: 280,
    },
    decks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Deck',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
})

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
const { faker } = require('@faker-js/faker');

const db = require('../config/connection');
const { User, Deck, Flashcard } = require('../models');

db.once('open', async () => {
  await Deck.deleteMany({});
  await User.deleteMany({});
  await Flashcard.deleteMany({});

  // create user data
  const deckData = [];
  for (let i = 0; i < 3; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    const deckName = faker.music.songName();
    const decks = await Deck.create({ deckName, deckCards: [] });
    for (let i = 0; i < 2; i++) {
      const title = faker.music.songName();
      const cardBody = faker.lorem.lines(1);
      const card = await Flashcard.create({ title, cardBody });

      await Deck.updateOne(
        { _id: decks._id },
        { $push: { deckCards: card._id } }
      );
    }

    const user = await User.create({ username, email, password, decks: [] });
    console.log(user);
    await User.updateOne({ _id: user._id }, { $push: { decks: decks._id } });
    console.log(user);
  }

  console.log('all done!');
  process.exit(0);
});

const { faker } = require('@faker-js/faker');

const db = require('../config/connection');
const { User, Deck, Flashcard } = require('../models');

db.once('open', async () => {
  await Deck.deleteMany({});
  await User.deleteMany({});
  await Flashcard.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 10; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    await User.collection.insertOne(new User({ username, email, password }));
  }

  //create flashcard data
  const flashcardData = [];
  for (let i = 0; i < 10; i++) {
    const title = faker.music.songName();
    const cardBody = faker.lorem.lines();
    await Flashcard.collection.insertOne(new Flashcard({ title, cardBody }));
  }

  //create Deck data
  const deckData = [];
  for (let i = 0; i < 3; i++) {
    const deckName = faker.music.songName();
    const cardBody = faker.lorem.lines();
    const cardList = [];
    for (let i = 0; i < 2; i++) {
      const title = faker.music.songName();
      const cardBody = faker.lorem.lines();
      const card = new Flashcard({ title, cardBody });
      cardList.push({ title, cardBody });
    }

    const deck = await Deck.collection.insertOne(new Deck({ deckName, cardBody, cardList }));
    deckData.push(deck);

  }

  

  console.log('all done!');
  Deck.find({}).then((decks) => {
    console.log(decks);
  });
  User.find({}).then((decks) => {
    console.log(decks);
  });
  Flashcard.find({}).then((decks) => {
    console.log(decks);
  });
  process.exit(0);
});

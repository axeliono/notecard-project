const { connectDB, db } = require('../../config/connection');
const { Flashcard } = require('../../models');
const { flashcardFind } = require("../module_methods")

describe('Test flashcard functionality', () => {
  beforeAll(() => connectDB());

  // beforeEach(async () => {
  //   const flashcard = new Flashcard({
  //     title: 'test title',
  //     cardBody: 'card body for the test flashcard',
  //   });
  //   const savedCard = await flashcard.save();
  //   return { savedCard: savedCard, flashcard: flashcard };
  // });

  afterEach(() => {
    Flashcard.deleteMany();
  });

  afterAll((done) => {
    db.close(done);
  });

  it('creates a new flashcard', async () => {
    const flashcard = new Flashcard({
      title: 'test title',
      cardBody: 'card body for the test flashcard',
    });
    const savedCard = await flashcard.save();
    expect(savedCard._id).toBeDefined();
    expect(savedCard.cardBody).toBe(flashcard.cardBody);
    expect(savedCard.title).toBe(flashcard.title);
  });

  it('pulls a flashcard saved to the database', () => {
    const flashcard = new Flashcard({
      title: 'test title',
      cardBody: 'card body for the test flashcard',
    });
    const savedCard = await flashcard.save();
    expect(flashcard.flashcardFind()).toBeDefined();
  });
});

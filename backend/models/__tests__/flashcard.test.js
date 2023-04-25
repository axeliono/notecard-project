const { connectDB, db } = require('../../config/connection');
const { Flashcard } = require('../../models');
// const { flashcardFind } = require('../module_methods');

describe('Test flashcard functionality', async () => {
  beforeAll(() => connectDB());

  beforeEach(async () => {
    const flashcard = new Flashcard({
      title: 'test title',
      cardBody: 'card body for the test flashcard',
    });
    const savedCard = await flashcard.save();
    return { savedCard: savedCard, flashcard: flashcard };
  });

  afterEach(() => {
    Flashcard.deleteMany();
  });

  afterAll((done) => {
    db.close(done);
  });

  test('creates a new flashcard', async () => {
    const flashcard = new Flashcard({
      title: 'test title',
      cardBody: 'card body for the test flashcard',
    });
    const savedCard = await flashcard.save();
    expect(savedCard._id).toBeDefined();
    expect(savedCard.cardBody).toBe(flashcard.cardBody);
    expect(savedCard.title).toBe(flashcard.title);
  });

  test('pulls a flashcard saved to the database', async () => {
    const flashcard = new Flashcard({
      title: 'test title',
      cardBody: 'card body for the test flashcard',
    });
    const savedCard = await flashcard.save();
    expect(savedCard.Find()).toBeDefined();
  });
});

import React from 'react';
import Flashcard from '../Flashcard';
import { Container, Row, Col } from 'react-bootstrap/';

const CardList = () => {
  const cardList = [
    {
      title: 'title',
      flashcardText: 'this is the text for the flashcard',
    },
    {
      title: 'title',
      flashcardText: 'this is the text for the flashcard',
    },
    {
      title: 'title',
      flashcardText: 'this is the text for the flashcard',
    },
    {
      title: 'title',
      flashcardText: 'this is the text for the flashcard',
    },
  ];
  return (
    <Container>
      <h3>This is the current Deck</h3>
      <Row className='my-5 text-center'>
        {cardList.map((card, i) => (
          <Col className='mb-5 justify-content-center'>
            <Flashcard
              title={`${card.title} #${i + 1}`}
              flashcardText={card.flashcardText}
              key={i}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardList;

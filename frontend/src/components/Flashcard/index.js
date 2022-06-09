import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Flashcard = ({ title, flashcardText }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{flashcardText}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Flashcard;

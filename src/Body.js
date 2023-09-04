import React, { useState, useEffect } from "react";
import "./index.css";
import Cards from "./Cards";
const Body = () => {
  const [deckCards, setDeckCards] = useState([
    { id: 1, name: "Bike", isMatched: false, isFlipped: false },
    { id: 2, name: "Bike", isMatched: false, isFlipped: false },
    { id: 3, name: "Boat", isMatched: false, isFlipped: false },
    { id: 4, name: "Boat", isMatched: false, isFlipped: false },
    { id: 5, name: "Car", isMatched: false, isFlipped: false },
    { id: 6, name: "Car", isMatched: false, isFlipped: false },
    { id: 7, name: "Cycle", isMatched: false, isFlipped: false },
    { id: 8, name: "Cycle", isMatched: false, isFlipped: false },
    { id: 9, name: "Helicopter", isMatched: false, isFlipped: false },
    { id: 10, name: "Helicopter", isMatched: false, isFlipped: false },
    { id: 11, name: "Train", isMatched: false, isFlipped: false },
    { id: 12, name: "Train", isMatched: false, isFlipped: false },
    { id: 13, name: "Truck", isMatched: false, isFlipped: false },
    { id: 14, name: "Truck", isMatched: false, isFlipped: false },
    { id: 15, name: "Balloon", isMatched: false, isFlipped: false },
    { id: 16, name: "Balloon", isMatched: false, isFlipped: false }
  ]);
  
  const [minutes,setminutes] = useState(0);
  const [seconds,setseconds] = useState(0);
  const [timeCounter,setTimeCounter] = useState(0);
  let time = 0 ;
  const [cards, setCards] = useState([]);
  const [showDeck, setShowDeck] = useState(false);
  const [openedCards, setOpenedCards] = useState([]);
  const [timerStarted, setTimerStarted] = useState(false);

  const [matchedCount, setMatchedCount] = useState(0);

  useEffect(() => {
    setCards([...deckCards]);
  }, [deckCards]);

  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  const handleCardClick = (card) => {
    console.log(openedCards)
    if (openedCards.length < 2 && !openedCards.includes(card)) {
      const updatedOpenedCards = [...openedCards, card];
      setOpenedCards(updatedOpenedCards);

      if (updatedOpenedCards.length === 2) {
        // Disable further clicks on cards until comparison is done
        document.body.style.pointerEvents = "none";

        setTimeout(() => {
          compareTwo(updatedOpenedCards);
        }, 2000);
      }
    }
  };

  const compareTwo = (openedCards) => {
    if (openedCards[0].name === openedCards[1].name) {
      // If matched, mark cards as matched
      const updatedDeck = cards.map((card) =>
        openedCards.includes(card)
          ? { ...card, isMatched: true }
          : card
      );

      setCards(updatedDeck);
      setMatchedCount(matchedCount + 2);
      if (matchedCount + 2 === cards.length) {
       
        console.log("All cards matched. Restarting the game...");
        alert("Congrats! You won. Start again.");

      
        setOpenedCards([]);
        setMatchedCount(0);
        const shuffledDeck = shuffle([...deckCards]);
        setDeckCards(shuffledDeck);
        setShowDeck(true);
     
      }
    }
    else{
      const updatedDeck = cards.map((card) =>
      openedCards.includes(card)
        ? { ...card, isFlipped: !card.isFlipped }
        : card
    );

    setCards(updatedDeck);
    }

    // Clear the opened cards and re-enable clicks
    setOpenedCards([]);
    document.body.style.pointerEvents = "auto";
  };

  const startGame = () => {
    const shuffledDeck = shuffle(cards);
    setCards(shuffledDeck);
    setShowDeck(true);
    
  };
  return (
    <div className="Body">
     
        {showDeck ? (
           <ul className="deck" id="deck">
          {
        cards.map((card, index) => (
        <div key={index} onClick={() => handleCardClick(card)}><Cards key={index} card={card} ></Cards></div>
        ))
          }</ul>
        ) : (
          <button className="btnshow" onClick={startGame}>Start</button>
        )}
      
      
    </div>
  );
};

export default Body;

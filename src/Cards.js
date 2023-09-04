import React, {useState, useEffect} from 'react';

const Cards = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  useEffect(() => {
    setIsFlipped(false);
  }, [props.card.isMatched, props.card.isFlipped]);

  const handleMouseMove = (event) => {
    event.target.classList.add('reflect')
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove('reflect')
  };

  const handleClick = (event) => {
    setIsFlipped(true);
    event.target.classList.add('rotate')
    event.target.classList.add('flip')
  };

  return (
    <div className='grid'>
      {props.card.isMatched?(
         <li className='card remove'    
         onClick={handleClick}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
       >
       <img
         src={`../img/${props.card.name}.png`}
       />
     </li>
      ):(
          <li className={`card ${isFlipped ? 'flip' : ''}`}  id='remove' 
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
        <img
          src={`../img/${props.card.name}.png`}
        />
      </li>
      )
      }
    </div>
  );
};

export default Cards;

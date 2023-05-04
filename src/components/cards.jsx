import Card from "./card";

function Cards({ cardsData, changeState }) {
  return (
    <div className="cards-container">
      {cardsData.map((cardData) => (
        <Card
          changeState={() => changeState(cardData.id)}
          key={cardData.id}
          text={cardData.text}
          title={cardData.title}
        />
      ))}
    </div>
  );
}

export default Cards;

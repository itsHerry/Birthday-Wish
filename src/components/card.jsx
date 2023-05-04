function Card({ title, text, del, changeState }) {
  return (
    <div onClick={changeState} className="circle">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Card;

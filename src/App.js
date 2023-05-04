import "./styles.css";
import Cards from "./components/cards";

function App() {
  const cardsData = [
    {
      id: 1,
      text:
        "I'm grateful that you were born 😄. You always make people laugh, help everyone beyond limits and fight a lot 😁. I'm grateful for every day I've known you in my life. You are kind, funny, and a beautiful kid 😅. We share some beautiful memories that are unforgettable regardless of the differences. It's only been three months but I feel like I've known you my entire life. \n Keep growing (Paathe Ji Daahinh) and have a happy life.\n Happy Birthday Lovely Lainey 🖤 ",
      title: "Happy Birthday 🍰"
    },
    {
      id: 2,
      text:
        "I'm sorry for every time I hurt you. I'm sorry for every time I failed you. I'm sorry for whenever I didn't meet your expectations. I know we've had our fair share of arguments, mostly because, well you are a kid 😁. \n Even if I was right in every argument, it still wouldn't make it any less painful to accept the fact that you get hurt too. So, \n I guess what I'm trying to say is, let's not lose eachother.",
      title: "I'm Sorry 😢😔"
    },
    {
      id: 3,
      text:
        "Dude, I was seriously disappointed with google when searched for \"Top 10 beautiful girls in the world\" and didn't see your face. God must have ran out of beautiness creating you. Even the angels must be gossiping about your stunning beauty.\n And of course, you know your eyes are my favourites. I think that's enough 😁.",
      title: "Koorhi Tareef 😉😍"
    },
    {
      id: 4,
      text:
        "So, this all was obviously my idea 😁 but due to circumstances that you are well aware of, most of the work is done by my janu Baroch.\n See, since I'm not paying him, I have to give him a shoutout 😂.",
      title: "About Creator 🤓"
    }
  ];
  const fadeUp = () => {
    Array.from(document.getElementsByClassName("hbd"))[0].classList.add("fade");
    const cards = Array.from(document.getElementsByClassName("circle"));
    cards.forEach((card, index) => {
      card.classList.add("card");
      card.classList.add(`card${index + 1}`);
    });
  };

  const changeState = (id) => {
    Array.from(document.getElementsByClassName("card"))[
      id - 1
    ].classList.toggle("main-card");
  };

  return (
    <>
      <Cards cardsData={cardsData} changeState={changeState} />
      <div onClick={fadeUp} className="hbd">
        <h1 className="hbdWish">Happy Birthday</h1>
        <h1 className="hbdWish lainey">Lainey 🖤</h1>
        <p className="clickMe">Click Me</p>
      </div>
    </>
  );
}
export default App;

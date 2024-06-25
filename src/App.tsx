import { useState } from "react";
import "./App.css";
import LogoIMG from "./assets/expression (1).png";

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const AllFrases = [
    {
      id: 1,
      nome: "Motivation",
      frases: [
        "Start where you are. Use what you have. Do what you can.",
        "Every bird that flies has overcome the fear of falling.",
        "Persist until it becomes easy.",
        "Sometimes you have to be your own hero.",
        "We are what we repeatedly do.",
      ],
    },
    {
      id: 2,
      nome: "Good Morning",
      frases: [
        "We are what we repeatedly do.",
        "Good Morning! You are everything I ever dreamed of.",
        "Good Morning! I don t need anything else when I have you by my side every day.",
        "Good Morning! The day is beautiful outside and waiting for you to be lived.",
        "Good Morning! Have a beautiful day and hope that the worries won t be present. ",
      ],
    },
  ];

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(
      Math.random() * AllFrases[categoriaSelecionada].frases.length
    );
    setTextoFrase(
      `"${AllFrases[categoriaSelecionada].frases[numeroAleatorio]}"`
    );
  }

  return (
    <div className="container">
      <img src={LogoIMG} alt="LogoFrases" className="logo" />
    
      <h2 className="title">Categories</h2>
      <section className="area">
        {AllFrases.map((item, index) => (
          <button
            key={item.id}
            className="buttonOne"
            style={{
              borderWidth:
                item.nome === AllFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#fa7f72",
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="buttonGenerate" onClick={gerarFrase}>
        Generate expression
      </button>

      {textoFrase !== "" && <p className="FraseGenerate">{textoFrase}</p>}
    </div>
  );
}

export default App;

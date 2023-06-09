import "./index.css"
import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CardDetails from "./pages/CardDetails";
import CardList from "./pages/CardIndex";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DeckCreation from "./pages/DeckCreation";
import SyntaxPage from "./pages/SyntaxPage";


function App() {

  const [cards, setCards] = useState([]);
   

  return (
    <div className="App">
     <Header />
    
     <Routes>
      <Route path="/" element={ <SyntaxPage />} />
      <Route path="/cards" element= { <CardList cards={cards} setCards={setCards}/>} />
      <Route path="/cards/:id" element= { <CardDetails />} />
      <Route path="/create" element= { <DeckCreation />} />
     </Routes>
     
     <Footer />
    </div>
  );
}

export default App;

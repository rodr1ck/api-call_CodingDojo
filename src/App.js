import './App.css';
import React, {useState} from 'react'
import PokemonName from './components/PokemonName';

function App() {

const [poke, setPoke] = useState([]); 
const [counter, setCounter] = useState(0); 
  
const llamarApi = () => {
  if(counter < 990){
  let counterplus = counter+20;
  let urlFetch = "https://pokeapi.co/api/v2/pokemon?offset=" + counterplus + "&limit=" + 20
  fetch(urlFetch)
    .then(response => response.json())
    .then( data => {
      const {results} = data
      const names = results.map(x => x.name)
      setPoke(names);
      setCounter(counter+20);
      })
    .catch(err=>console.log(err)) 
  } else setCounter(0);
}

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <button onClick={llamarApi}>Presione aqui</button>
      <PokemonName poke={poke}/>
    </div>
  );
}

export default App;

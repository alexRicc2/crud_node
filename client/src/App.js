import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Crud aplication</h1>
      <div className='form'>
        <label for="movie">Nome do filme</label>
        <input type="text" name="movie" id="movie"></input>
        <label for="review">Sua Review</label>
        <input type="text" name="review" id="review"></input>

        <button>Enviar</button>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Books from "./components/Books"
import BookByTitle from './components/BooksByTitle';

function App() {
  return (
    <main>
      <Books />
      <BookByTitle title="Shoe Dog" />
    </main>
  );
}

export default App;

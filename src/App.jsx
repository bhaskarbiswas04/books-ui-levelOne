import './App.css';
import Books from "./components/Books"
import BookByTitle from './components/BooksByTitle';
import BookByAuthor from './components/BookByAuthor';

function App() {
  return (
    <main>
      <Books />
      <BookByTitle title="Shoe Dog" />
      <BookByAuthor bookAuthor="Harper Lee" />
    </main>
  );
}

export default App;

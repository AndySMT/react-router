import { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const bookEndPoint = "/books";

const initialState = {
  title: "",
  author: "",
  description: "",
  thumbnail: "",
};

export default function NewBook() {
  const [NewBook, setNewBook] = useState(initialState);
  function handleBookData(e) {
    setNewBook({ ...NewBook, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${apiUrl}${bookEndPoint}`, NewBook)
      .then((res) => {
        setNewBook(initialState);
        console.log("Libro creato ", res.data.item);
      })
      .catch((error) => console.error("Errore creazione", error))
      .finally(() => console.log("Richiesta per aggiungere librocompletata"));
  }

  return (
    <div>
      <h1>Novo Libro</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titolo"
            name="title"
            value={NewBook.title}
            onChange={handleBookData}
          />
          <input
            type="text"
            placeholder="Autore"
            name="author"
            value={NewBook.author}
            onChange={handleBookData}
          />
          <input
            type="text-area"
            placeholder="Descrizione"
            name="description"
            value={NewBook.description}
            onChange={handleBookData}
          />
          <input
            type="text"
            placeholder="Immagine"
            name="thumbnail"
            value={NewBook.thumbnail}
            onChange={handleBookData}
          />
          <button type="submit">Aggiungi</button>
        </form>
      </div>
    </div>
  );
}

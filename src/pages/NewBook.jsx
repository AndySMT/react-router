import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();
  function handleBookData(e) {
    setNewBook({ ...NewBook, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${apiUrl}${bookEndPoint}`, NewBook)
      .then((res) => {
        setNewBook(initialState);
        setIsActive(true);
        console.log("Libro creato ", res.data.item);
      })
      .catch((error) => console.error("Errore creazione", error))
      .finally(() => console.log("Richiesta per aggiungere librocompletata"));
  }
  const handleSave = () => {
    /* const confirmSave = alert("Vuoi aggiungere il libro?"); */
    const confirmSave = window.confirm("Vuoi aggiungere il libro?");
    if (confirmSave) {
      navigate("/books");
    } else {
      alert("Salvataggio annullato");
    }
  };

  return (
    <div className="container p-5 d-flex justify-content-between">
      <div
        className="d-flex flex-column aling-items-start"
        style={{ width: "30%" }}
      >
        <h1>Nuovo Libro</h1>
        <form onSubmit={handleSubmit} className="">
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Titolo"
            name="title"
            value={NewBook.title}
            onChange={handleBookData}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Autore"
            name="author"
            value={NewBook.author}
            onChange={handleBookData}
          />
          <textarea
            maxLength={22}
            className="form-control mb-2"
            type="text-area"
            placeholder="Descrizione"
            name="description"
            value={NewBook.description}
            onChange={handleBookData}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Immagine"
            name="thumbnail"
            value={NewBook.thumbnail}
            onChange={handleBookData}
          />
          <button className="btn btn-primary w-100">Anteprima</button>
        </form>
      </div>
      {isActive && (
        <div className="" style={{ width: "60%" }}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Anteprima Libro</h5>
              <p className="card-text">
                <strong>Titolo:</strong> {NewBook.title}
              </p>
              <p className="card-text">
                <strong>Descrizione:</strong> {NewBook.description}
              </p>
              <div>
                <strong>Immagine:</strong>{" "}
                {NewBook.thumbnail ? (
                  <img
                    src={NewBook.thumbnail}
                    alt="Anteprima immagine"
                    className="img-fluid"
                  />
                ) : (
                  "Nessuna immagine"
                )}
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary w-100 mt-2"
              onClick={handleSave}
            >
              Salva
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

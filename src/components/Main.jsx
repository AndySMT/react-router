import { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

const apiUrl = import.meta.env.VITE_API_URL;
const bookEndPoint = "/books";

const Main = () => {
  const [books, setBooks] = useState([]);

  useEffect(getData, []);

  function getData() {
    axios
      .get(`${apiUrl}${bookEndPoint}`)
      .then((res) => {
        setBooks(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finito");
      });
  }
  function deleteItem(e, id) {
    e.preventDefault();
    console.log(e);
    axios.delete(`${apiUrl}${bookEndPoint}/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
      getData();
    });
  }
  return (
    <main className="container py-3">
      <div className="row gx-4 gy-4">
        {books.map((book) => (
          <div className="col-12 col-md-4 col-lg-3" key={book.id}>
            <Card
              data={book}
              onDeleteBook={(e) => {
                deleteItem(e, book.id);
              }}
            />
          </div>
        ))}
      </div>
    </main>
  );
};
export default Main;

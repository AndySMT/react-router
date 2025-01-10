import Card from "../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;
const bookEndPoint = "/books";

export default function Book() {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiUrl}${bookEndPoint}/${id}`)
      .then((res) => {
        setBook(res.data.item);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [id]);
  return (
    <main className="container py-3">
      <div className="row gx-4 gy-4">{book && <Card data={book} />}</div>
    </main>
  );
}

/* import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProvaContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const bookEndPoint = "/books";

  useEffect(() => {
    axios
      .get(`${apiUrl}${bookEndPoint}`)
      .then((res) => {
        setBooks(res.data.results);
      })
      .catch((error) => {
        console.error("Errore", error);
      })
      .finally(() => {
        console.log("Finito chiamata API nell context");
      });
  }),
    [];
  return (
    <ProvaContext.Provider value={{ books }}>{children}</ProvaContext.Provider>
  );
};

export default ProvaContext; */

import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProvaContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const bookEndPoint = "/books";
  const limit = 3;

  useEffect(() => {
    axios
      .get(`${apiUrl}${bookEndPoint}?limit=${limit}`)
      .then((res) => {
        setBooks(res.data.results);
      })
      .catch((error) => {
        console.error("Errore", error);
      })
      .finally(() => {
        console.log("Finito chiamata API nel context");
      });
  }, [apiUrl, bookEndPoint, limit]);

  return (
    <ProvaContext.Provider value={{ books }}>{children}</ProvaContext.Provider>
  );
};

export default ProvaContext;

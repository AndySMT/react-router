// import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import contact from "./pages/Contact";
import Home from "./pages/Home";
import Books from "./pages/books";
import About from "./pages/About";
import Book from "./pages/Book";
import Error from "./pages/Error";
import NewBook from "./pages/NewBook";
//import { useContext } from "react";
//import ProvaContext from "./context/ProvaContext";
import { BookProvider } from "./context/ProvaContext";
function App() {
  //const prova = useContext(ProvaContext);
  return (
    <BookProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={Home}></Route>
            <Route path="/contact" Component={contact}></Route>
            <Route path="/books">
              <Route index Component={Books}></Route>
              <Route path=":id" Component={Book} />
              <Route path="newbook" Component={NewBook} />
              <Route path="*" Component={Error} />
            </Route>
            <Route path="/about" Component={About}></Route>
          </Route>
          <Route path="*" Component={Error} />
        </Routes>
      </BrowserRouter>
    </BookProvider>
    /* <>
      <Header />
      <Main />
      <Footer />
    </> */
  );
}

export default App;

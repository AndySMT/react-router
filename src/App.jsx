// import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import contact from "./pages/Contact";
import Home from "./pages/Home";
import Books from "./pages/books";
import About from "./pages/About";
import Book from "./pages/Book";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={Home}></Route>
          <Route path="/contact" Component={contact}></Route>
          <Route path="/books">
            <Route index Component={Books}></Route>
            <Route path=":id" Component={Book} />
            <Route path="*" Component={Error} />
          </Route>
          <Route path="/about" Component={About}></Route>
        </Route>
        <Route path="*" Component={Error} />
      </Routes>
    </BrowserRouter>
    /* <>
      <Header />
      <Main />
      <Footer />
    </> */
  );
}

export default App;

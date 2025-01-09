import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import contact from "./pages/Contact";
import Home from "./pages/Home";
import Books from "./pages/books";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={Home}></Route>
          <Route path="/contact" Component={contact}></Route>
          <Route path="/books" Component={Books}>
            <Route path="/books/:id" Component={Books} />
          </Route>
          <Route path="/about" Component={About}></Route>
        </Route>
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

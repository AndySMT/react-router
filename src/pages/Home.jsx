/* import { useContext } from "react";
import ProvaContext from "../context/ProvaContext.jsx";
export default function Home() {
  const { books } = useContext(ProvaContext);
  return (
    <>
      <h1>Home</h1>
      <p>{books}</p>
    </>
  );
}
 */
import { useContext } from "react";
import ProvaContext from "../context/ProvaContext";

export default function Home() {
  const { books } = useContext(ProvaContext);

  return (
    <>
      <h1>Home</h1>
      <p>{books && books.join(", ")}</p>
    </>
  );
}

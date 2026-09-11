import Home from "./pages/Home";
import Peraturan from "./pages/Peraturan";
import Panduan from "./pages/Panduan";

function App() {
  const path = window.location.pathname;

  if (path === "/peraturan") {
    return <Peraturan />;
  }

  if (path === "/panduan") {
    return <Panduan />;
  }

  return <Home />;
}

export default App;

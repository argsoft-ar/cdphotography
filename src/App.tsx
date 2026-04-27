import "./App.css";
import { Loading } from "./components/Loading/Loading";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Loading />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;

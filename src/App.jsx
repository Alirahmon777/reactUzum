import Header from "./components/header";
import Hero from "./components/hero";
import Data from "./components/data";

function App() {
  return (
    <div>
      <header className="header">
        <Header />
      </header>
      <main>
        <Hero />
        <Data />
      </main>
    </div>
  );
}

export default App;

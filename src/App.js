import { Navbar } from "./components";
import { LandingPageMain } from "./components";
import { Footer } from "./components";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Navbar></Navbar>

        <LandingPageMain></LandingPageMain>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

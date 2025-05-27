import Navigation from "./Navigation.jsx";
import HeroPage from "./HeroPage.jsx";
import Features from "./Features.jsx";
import Extension from "./Extension.jsx";
import Fqa from "./Fqa.jsx";
import Form from "./Form.jsx";
import Footer from "./Footer.jsx";

function App() {

  return (
    <div className="relative">
      <header className="absolute bg-white w-full z-10">
        <Navigation />
      </header>
      <main>
        <HeroPage />
        <Features />
        <Extension />
        <Fqa />
        <Form />
        <Footer />
      </main>
    </div>
  )
}

export default App

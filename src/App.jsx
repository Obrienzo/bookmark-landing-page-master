import Navigation from "./pages/Navigation.jsx";
import HeroPage from "./pages/HeroPage.jsx";
import Features from "./pages/Features.jsx";
import Extension from "./pages/Extension.jsx";
import Fqa from "./pages/Fqa.jsx";
import Form from "./pages/Form.jsx";
import Footer from "./pages/Footer.jsx";

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

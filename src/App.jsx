import { useState } from "react";
import Navigation from "./pages/Navigation.jsx";
import HeroPage from "./pages/HeroPage.jsx";
import Features from "./pages/Features.jsx";
import Extension from "./pages/Extension.jsx";
import Fqa from "./pages/Fqa.jsx";
import Form from "./pages/Form.jsx";
import Footer from "./pages/Footer.jsx";

function App() {

  const featuresList = [
    {
        tab: 1,
        title: 'Bookmark in one click',
        illustration: '/src/assets/images/illustration-features-tab-1.svg',
        description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
        tab: 2,
        title: 'Intelligent search',
        illustration: '/src/assets/images/illustration-features-tab-2.svg',
        description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
        tab: 3,
        title: 'Share your bookmarks',
        illustration: '/src/assets/images/illustration-features-tab-3.svg',
        description: 'Easly share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
  ];

  const expandContent = 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdiet.';

  const [dropdown, setDropdown] = useState(false);
  const [ feature, setFeature ] = useState(featuresList[0]);
  const [ selected, setSelected ] = useState(1);

  const handleDropdown = () => {
    setDropdown(prevState => !prevState);
    console.log(dropdown);
  }

  const changeDisplay = (number) => {
    setFeature(featuresList[number]);
  };

  const handleSelection = (value) => {
    setSelected(value);
  }

  



  return (
    // Remember to apply some styling to stop the scrolling of the page when the dropdown menu is open...
    <div className={`relative ${dropdown ? '' : ''}`}>
      <div className={`${dropdown ? 'absolute z-20 top-0 left-0 h-screen w-full bg-zinc-600 opacity-90' : 'hidden'}`}></div>
      <header>
        <Navigation
          dropdown={dropdown}
          setDropdown={setDropdown}
          handleDropdown={handleDropdown}
        />
      </header>
      <main className="overflow-hidden">
        <HeroPage />
        <Features
          feature={feature}
          handleDisplay={changeDisplay}
          selected={selected}
          handleSelection={handleSelection}
        />
        <Extension />
        <Fqa />
        <Form />
        <Footer />
      </main>
    </div>
  )
}

export default App

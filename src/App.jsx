import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import MainContent from "./components/Maincontent/Maincontent";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <MainContent/>
      <Footer/>
    </>
  );
}

export default App;

import { GlobalStyle, Div } from "./App-styled";
import About from "./components/About";
import Categorise from "./components/categorise";
import Course from "./components/Course";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Leave from "./components/Leave";
import Online from "./components/Online";
import Questions from "./components/Questions";
import Result from "./components/Result";
import System from "./components/Sytem";
import Tariffs from "./components/Tariffs";
import Teacher from "./components/Teacher";
import Teachers from "./components/teachers";
import Values from "./components/Values";
import Watch from "./components/Watch";

function App() {
  return (
    <>
      <Div>
        <GlobalStyle />
        <Header />
        <System />
        <Course />
        <Watch />
        <Categorise />
        <Values />
        <Online />
        <Result />
        <About />
        <Teachers />
        <Tariffs />
        <Teacher/>
        <Questions />
        <Leave />
        <Footer />
      </Div>
    </>
  );
}

export default App;

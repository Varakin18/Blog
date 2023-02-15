import { BrowserRouter as Router, Switch, } from "react-router-dom";
import "./App.css";
import { BlogContent } from "./components/BlogContent/BlogContent";
import { PageContent } from "./components/ContentPage/ContentPage";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/header/Header";
import { Sign } from "./components/sign/Sign.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Sign />
        
        <BlogContent />

        <PageContent />

        <Footer year={new Date().getFullYear()} />
      </div>
    </Router>
  );
}

export default App;

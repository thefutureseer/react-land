import "../style/styles.css";
import Header from "./Header";
import Nav from "./Nav";
import Section from "./Section";
import Aside from "./Aside";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Section />
      <Aside />
      <Footer />
    </div>
  );
}

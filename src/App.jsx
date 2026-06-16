import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Component1 from "./pages/Component1";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Contacts from "./pages/Contacts";
import Kit from "./pages/Kit";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "ТЕХ - О компании";
        metaDescription = "";
        break;
      case "/brands":
        title = "Бренды";
        metaDescription = "Бренды компании";
        break;
      case "/contacts":
        title = "ТЕХ - Контакты";
        metaDescription = "Контакты компании ТЕХ";
        break;
      case "/kit":
        title = "K1T - Инженерия без компромиссов";
        metaDescription = "Бренд K1T — инженерные наборы";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Component1 />} />
      <Route path="/about" element={<About />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/kit" element={<Kit />} />
    </Routes>
  );
}
export default App;

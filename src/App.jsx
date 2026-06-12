import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Component1 from "./pages/Component1";

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
    <div>
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, color: 'lime', background: 'black', padding: '10px' }}>
        REACT IS ALIVE! Pathname: {pathname}, BaseUrl: {import.meta.env.BASE_URL}
      </div>
      <Routes>
        <Route path="/" element={<Component1 />} />
      </Routes>
    </div>
  );
}
export default App;

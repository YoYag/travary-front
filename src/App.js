import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./routes/Main";
import Plan from "./routes/Plan";
import Meet from "./routes/Meet";
import Diary from "./routes/Diary";
import Login from "./routes/Login";
import Join from "./routes/Join";
import Test from "./routes/Test";

function App() {
  return (
    <div className="m-auto w-1280px flex flex-col items-center ...">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/meet" element={<Meet />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Link to={`/test`}>
          <button className="btn btn-sm">테스트페이지</button>
        </Link>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

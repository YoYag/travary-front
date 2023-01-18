import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./routes/Main";
import Plan from "./routes/Plan";
import Meet from "./routes/Meet";
import Diary from "./routes/Diary";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Test from "./routes/Test";
import CreatePlan from "./routes/CreatePlan";
import CreateDiary from "./routes/CreateDiary";
import PlanDetail from "./routes/PlanDetail";

function App() {
  return (
    <div className="m-auto w-1280px flex flex-col items-center ...">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create_plan" element={<CreatePlan />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/meet" element={<Meet />} />
          <Route path="/create_diary" element={<CreateDiary />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/test" element={<Test />} />
          <Route path="/plan_detail" element={<PlanDetail />} />
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

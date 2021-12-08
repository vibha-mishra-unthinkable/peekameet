import { Routes, Route } from "react-router-dom";
import "./App.scss";
import SignIn from "./components/SignIn/SignIn";
import Footer from "./components/Footer/Footer";
import { AppProvider } from "./provider/Provider";
import UserProfile from "./components/UserProfile/UserProfile";
function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<UserProfile />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

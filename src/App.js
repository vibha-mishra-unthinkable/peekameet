import { Routes, Route } from "react-router-dom";
import "./App.scss";
import axios from "axios";
import SignIn from "./components/SignIn/SignIn";
import Footer from "./components/Footer/Footer";
import Details from "./components/Details/Details";
import Notes from "./components/Notes/Notes";
import AuthContext from "./context/AuthContext";

import { useContext } from "react";
import AddNotes from "./components/AddNotes/AddNotes";
import { Provider } from "react-redux";
import store from "./redux/store/store";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<Details />} />
            {/* <Route path="/home/details" element={<Details />} /> */}
            <Route path="/home/notes" element={<Notes />} />
            <Route path="/home/notes/addnotes" element={<AddNotes />} />
          </Routes>
        </div>
        <Footer />
      </Provider>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.scss";
import SignIn from "./components/SignIn/SignIn";
import Footer from "./components/Footer/Footer";
import Details from "./components/Details/Details";
import Notes from "./components/Notes/Notes";
import AddNotes from "./components/AddNotes/AddNotes";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<Details />} />
            <Route path="/home/notes" element={<Notes />} />
            <Route path="/home/notes/addnotes" element={<AddNotes />} />
            <Route path="/home/notes/editnotes/:id" element={<AddNotes />} />
            <Route path="*" element={<SignIn />} />
          </Routes>
        </div>
        <Footer />
      </Provider>
    </>
  );
}

export default App;

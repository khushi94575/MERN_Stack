import "./App.css";

import Header from "./components/Header/Header";
import NoteInput from "./components/NotesSection/NoteInput";
import NotesSection from "./components/NoteSection/NotesInput";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <NoteInput />
        <NoteInput/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
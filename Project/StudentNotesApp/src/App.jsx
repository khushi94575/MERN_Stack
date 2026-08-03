import "./App.css";

import Header from "./components/Header/Header";
import NoteInput from "./components/NoteInput/NoteInput";
import NotesSection from "./Components/NotesSection/NoteInput";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <NoteInput />
        <NotesSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
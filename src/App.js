import "./App.css";
import SignUpForm from "./components/signup/signup";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="nav-bar">
          <Navbar />
        </div>
        <div>
          <SignUpForm />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

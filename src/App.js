import "./css/App.css";
import Home from "./pages/home/Home";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./contex/AuthContex";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Nav />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;

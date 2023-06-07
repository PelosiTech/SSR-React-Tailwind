import { Routes, Route, BrowserRouter } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Main from './pages/Main';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    
      <div className="flex flex-col min-h-screen justify-between">
        <Header />

        <Routes>
          {/* <Route element={<Header />}> */}
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          {/* </Route> */}
        </Routes>

        <Footer />
      </div>
      </BrowserRouter>
  );
}

export default App;


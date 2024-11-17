// import "./App.css";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header></Header>
//         <Routes>
//           <Route path="/" element={<Home></Home>}></Route>
//           <Route path="/about" element={<About></About>}></Route>
//           {/* <Route path="/contact" element={<Contact></Contact>}></Route> */}
//           <Route path="/projects" element={<Projects></Projects>}></Route>
//           {/* <Route path="/skills" element={<Skills></Skills>}></Route> */}
//         </Routes>
//         <Footer></Footer>
//       </div>
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

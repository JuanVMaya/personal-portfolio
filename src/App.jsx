import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About, Contact, Home, Projects } from "./pages";

function App() {
  return (
    <main className="bg-base-100 max-w-screen-xl m-auto">
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                {/* <Footer /> */}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

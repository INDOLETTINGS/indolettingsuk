import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/About";
import ContactPage from "./components/ContactPage";
import RentProp from "./components/RentProp";
import SaleProp from "./components/SaleProp";
import PricingPolicy from "./components/PricingPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/rent" element={<RentProp />} />
        <Route path="/sale" element={<SaleProp />} />
        <Route path="/pricing-policy" element={<PricingPolicy/>} />
      </Routes>
    </Router>
  );
}

export default App;


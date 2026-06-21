import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PastConferences from "./components/PastConferences";
import Tracks from "./components/Tracks";
import Attendees from "./components/Attendees";
import CallForPapers from "./components/CallForPapers";
import ImportantDates from "./components/ImportantDates";
import Registration from "./components/Registration";
import Sponsorship from "./components/Sponsorship";
import Committees from "./components/Committees";
import Venue from "./components/Venue";
import Footer from "./components/Footer";

import Institute from "./components/Institute";
import University from "./components/University";
import ForAuthors from "./components/ForAuthors";
import AboutPune from "./components/AboutPune";

import Register from "./components/Register";
import RegistrationFees from "./components/RegistrationFees";
import RegistrationSummary from "./components/RegistrationSummary";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero />
      <About />
      <Tracks />
      <CallForPapers />
      <ImportantDates />
      <Registration />
      <Attendees />
      <PastConferences />

      <Sponsorship />
      <Committees />
      <Venue />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* REGISTRATION FLOW */}
        <Route path="/register" element={<Register />} />
        <Route path="/registration-fees" element={<RegistrationFees />} />
        <Route
          path="/registration-summary"
          element={<RegistrationSummary />}
        />

        {/* OTHER PAGES */}
        <Route path="/institute" element={<Institute />} />
        <Route path="/university" element={<University />} />
        <Route path="/authors" element={<ForAuthors />} />
        <Route path="/about-pune" element={<AboutPune />} />
        <Route path="/committees" element={<Committees />} />

      </Routes>
    </Router>
  );
}

export default App;
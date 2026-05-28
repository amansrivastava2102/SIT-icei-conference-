import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PastConferences from './components/PastConferences';
import Tracks from './components/Tracks';
import Attendees from './components/Attendees';
import CallForPapers from './components/CallForPapers';
import ImportantDates from './components/ImportantDates';
import Registration from './components/Registration';
import Sponsorship from './components/Sponsorship';
import Committees from './components/Committees';
import Venue from './components/Venue';
import Footer from './components/Footer';
import Institute from './components/Institute';
import University from './components/University';
import ForAuthors from './components/ForAuthors';
import AboutPune from './components/AboutPune';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* 1. ABOUT */}
      <About />

      {/* 2. TRACKS */}
      <Tracks />

      {/* 3. CALL FOR PAPERS */}
      <CallForPapers />

      {/* 4. IMPORTANT DATES */}
      <ImportantDates />

      {/* 5. REGISTRATION */}
      <Registration />

      {/* 6. WHO WILL ATTEND */}
      <Attendees />

      {/* 7. ICEI CONFERENCE SERIES */}
      <PastConferences />

      {/* REMAINING */}
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

        {/* HOME PAGE */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        {/* INSTITUTE PAGE */}
        <Route path="/institute" element={<Institute />} />

        {/* UNIVERSITY PAGE */}
        <Route path="/university" element={<University />} />

        {/* FOR AUTHORS PAGE */}
        <Route path="/authors" element={<ForAuthors />} />

        {/* ABOUT PUNE PAGE */}
        <Route path="/about-pune" element={<AboutPune />} />
        
        <Route path="/committees" element={<Committees />} />
        
      </Routes>
    </Router>
  );
}

export default App;
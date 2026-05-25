import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PastConferences from './components/PastConferences';
import ConferenceFormat from './components/ConferenceFormat';
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

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <PastConferences />
      <ConferenceFormat />
      <Tracks />
      <Attendees />
      <CallForPapers />
      <ImportantDates />
      <Registration />
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

        <Route path="/university" element={<University />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
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

function App() {
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

export default App;

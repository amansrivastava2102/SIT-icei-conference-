import Navbar from './Navbar';
import ConferenceFormat from './ConferenceFormat';

const ForAuthors = () => {
  return (
    <>
      <Navbar />

      <div className="pt-[90px] bg-white min-h-screen">
        <ConferenceFormat />
      </div>
    </>
  );
};

export default ForAuthors;
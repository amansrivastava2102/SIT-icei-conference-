import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function RegistrationSummary() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 pt-36 pb-16 px-4">
        <div className="max-w-5xl mx-auto bg-white p-10 shadow-lg rounded-lg">

          {/* Progress */}
          <div className="flex justify-center items-center gap-24 mb-12">

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                ?
              </div>
              <span className="mt-2 text-sm">
                Registration Details
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                ?
              </div>
              <span className="mt-2 text-sm">
                Registration Items
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center">
                3
              </div>
              <span className="mt-2 text-sm font-medium">
                Registration Summary
              </span>
            </div>

          </div>

          <h1 className="text-4xl font-bold mb-8">
            Registration Summary
          </h1>

          <div className="bg-gray-50 border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">
              Registration Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <span className="font-medium">Registration Type:</span>
                <p className="text-gray-600">Selected Registration Type</p>
              </div>

              <div>
                <span className="font-medium">Full Name:</span>
                <p className="text-gray-600">Participant Name</p>
              </div>

              <div>
                <span className="font-medium">Email:</span>
                <p className="text-gray-600">participant@email.com</p>
              </div>

              <div>
                <span className="font-medium">Paper ID:</span>
                <p className="text-gray-600">ICEI-2026-001</p>
              </div>

            </div>
          </div>

          <div className="bg-gray-50 border rounded-lg p-6 mb-8">

            <h2 className="text-xl font-semibold mb-4">
              Selected Registration Items
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Conference Registration</li>
              <li>Additional Registration (if selected)</li>
              <li>Conference Dinner (if selected)</li>
              <li>Welcome Reception (if selected)</li>
              <li>Extra Page Fee (if selected)</li>
            </ul>

          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mb-8">

            <h3 className="font-semibold text-lg mb-2">
              Payment Information
            </h3>

            <p className="text-gray-700">
              Registration fees and selected item costs will be calculated
              automatically during payment processing.
            </p>

          </div>

          <div className="flex justify-between items-center mt-10">

            <Link
              to="/registration-fees"
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded"
            >
              Previous
            </Link>

            <div className="flex gap-4">

              <Link
                to="/"
                className="border border-red-600 text-red-600 px-6 py-3 rounded"
              >
                Cancel
              </Link>

              <button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded font-semibold"
              >
                Proceed To Payment
              </button>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

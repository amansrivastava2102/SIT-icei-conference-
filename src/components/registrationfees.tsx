import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function RegistrationFees() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 pt-36 pb-16 px-4">
        <div className="max-w-6xl mx-auto bg-white p-10 shadow-lg rounded-lg">

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
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center">
                2
              </div>
              <span className="mt-2 text-sm font-medium">
                Registration Items
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center">
                3
              </div>
              <span className="mt-2 text-sm">
                Registration Summary
              </span>
            </div>

          </div>

          <h1 className="text-4xl font-bold text-center mb-10">
            Registration Items
          </h1>

          <div className="border rounded-lg p-6 mb-10 bg-gray-50">
            <h2 className="text-2xl font-semibold mb-2">
              Conference Registration
            </h2>

            <p className="text-gray-600">
              Registration fee will be calculated based on the selected
              registration category.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-8">
            Optional Items
          </h2>

          {/* Additional Registration */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold">
                Additional Registration
              </h3>

              <p className="text-sm text-gray-500">
                Add additional registrations if required.
              </p>
            </div>

            <select
              required
              className="border border-gray-300 rounded px-4 py-3"
            >
              <option value="">Select Quantity</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          {/* Dinner */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold">
                Conference Dinner
              </h3>
            </div>

            <select
              required
              className="border border-gray-300 rounded px-4 py-3"
            >
              <option value="">Select Quantity</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          {/* Welcome Reception */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold">
                Welcome Reception
              </h3>
            </div>

            <select
              required
              className="border border-gray-300 rounded px-4 py-3"
            >
              <option value="">Select Quantity</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          {/* Extra Page Fee */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="font-semibold">
                Extra Page Fee
              </h3>
            </div>

            <select
              required
              className="border border-gray-300 rounded px-4 py-3"
            >
              <option value="">Select Quantity</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          <div className="flex justify-between mt-12">

            <Link
              to="/register"
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

              <Link
                to="/registration-summary"
                className="bg-red-600 text-white px-6 py-3 rounded"
              >
                Next
              </Link>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}


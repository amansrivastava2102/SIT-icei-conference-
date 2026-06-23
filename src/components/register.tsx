import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleNext = () => {
    const registrationType = (
      document.getElementById("registrationType") as HTMLSelectElement
    )?.value;

    const fullName = (
      document.getElementById("fullName") as HTMLInputElement
    )?.value;

    const email = (
      document.getElementById("email") as HTMLInputElement
    )?.value;

    const paperId = (
      document.getElementById("paperId") as HTMLInputElement
    )?.value;

    const country = (
      document.getElementById("country") as HTMLSelectElement
    )?.value;

    const privacyAccepted = (
      document.getElementById("privacy") as HTMLInputElement
    )?.checked;

    if (!registrationType || registrationType === "Select Registration Type") {
      setError("Please select a Registration Type");
      return;
    }

    if (!fullName.trim()) {
      setError("Please enter your Full Name");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your Email Address");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid Email Address");
      return;
    }

    if (!paperId.trim()) {
      setError("Please enter your Paper ID");
      return;
    }

    if (!country || country === "Select Country") {
      setError("Please select a Country");
      return;
    }

    if (!privacyAccepted) {
      setError("You must accept the Privacy Statement");
      return;
    }

    setError("");
    navigate("/registration-fees");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 pt-36 pb-16 px-4">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-10">

          {/* STEP INDICATOR */}
          <div className="mb-12">

            <div className="flex justify-center items-center gap-24">

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <span className="mt-2 text-sm font-medium">
                  Registration Details
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold">
                  2
                </div>
                <span className="mt-2 text-sm">
                  Registration Fees
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold">
                  3
                </div>
                <span className="mt-2 text-sm">
                  Registration Summary
                </span>
              </div>

            </div>

          </div>

          {/* PAGE TITLE */}
          <div className="mb-10 border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Registration Details
            </h1>

            <p className="text-gray-600 mt-3">
              Please complete the information below to register for ICEI 2026.
            </p>
          </div>

          <form className="space-y-8">

            {/* REGISTRATION TYPE */}
            <div className="grid md:grid-cols-2 gap-8">

              <div>
                <label className="block font-semibold mb-2">
                  Registration Type <span className="text-red-600">*</span>
                </label>

                <select
                  id="registrationType"
                  className="w-full border border-gray-300 rounded px-4 py-3"
                >
                  <option>Select Registration Type</option>
                  <option>IEEE Member (Author)</option>
                  <option>IEEE Member (Non Author)</option>
                  <option>Non IEEE Member (Author)</option>
                  <option>Non IEEE Member (Non Author)</option>
                  <option>Student IEEE Member</option>
                  <option>Student Non IEEE Member</option>
                </select>
              </div>

            </div>

            {/* FULL NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-8">

              <div>
                <label className="block font-semibold mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
              </div>

            </div>

            {/* ORGANIZATION + POSITION */}
            <div className="grid md:grid-cols-2 gap-8">

              <div>
                <label className="block font-semibold mb-2">
                  Organization
                </label>

                <input
                  type="text"
                  placeholder="Enter Organization"
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Position
                </label>

                <input
                  type="text"
                  placeholder="Enter Position"
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
              </div>

            </div>

            {/* MOBILE */}
            <div>

              <label className="block font-semibold mb-2">
                Mobile Number
              </label>

              <input
                type="text"
                placeholder="+91 XXXXX XXXXX"
                className="w-full border border-gray-300 rounded px-4 py-3"
              />

            </div>

            {/* IEEE MEMBER ID */}
            <div>

              <label className="block font-semibold mb-2">
                IEEE Member ID
              </label>

              <input
                type="text"
                placeholder="Enter IEEE Member ID"
                className="w-full border border-gray-300 rounded px-4 py-3"
              />

            </div>

            {/* PAPER IDS */}
            <div className="grid md:grid-cols-2 gap-8">

              <div>
                <label className="block font-semibold mb-2">
                  Paper ID <span className="text-red-600">*</span>
                </label>

                <input
                  id="paperId"
                  type="text"
                  placeholder="Example: ICEI2026-001"
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Second Paper ID
                </label>

                <input
                  type="text"
                  placeholder="Optional"
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
              </div>

            </div>

            {/* COUNTRY */}
            <div>

              <label className="block font-semibold mb-2">
                Country <span className="text-red-600">*</span>
              </label>

              <select
                id="country"
                className="w-full border border-gray-300 rounded px-4 py-3"
              >
                <option>Select Country</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>Germany</option>
                <option>France</option>
                <option>Japan</option>
                <option>Singapore</option>
                <option>China</option>
              </select>

            </div>

            {/* VISA LETTER */}
            <div>

              <label className="block font-semibold mb-3">
                Do you require a Visa Support Letter?
              </label>

              <div className="flex gap-8">

                <label className="flex items-center gap-2">
                  <input type="radio" name="visa" />
                  Yes
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="visa" />
                  No
                </label>

              </div>

            </div>

            {/* DIETARY */}
            <div>

              <label className="block font-semibold mb-2">
                Dietary Requirement
              </label>

              <input
                type="text"
                placeholder="Optional"
                className="w-full border border-gray-300 rounded px-4 py-3"
              />

            </div>

            {/* ACCESSIBILITY */}
            <div>

              <label className="block font-semibold mb-2">
                Accessibility Requirement
              </label>

              <input
                type="text"
                placeholder="Optional"
                className="w-full border border-gray-300 rounded px-4 py-3"
              />

            </div>

            {/* PRIVACY */}
            <div className="border-t pt-6">

              <label className="flex items-start gap-3">

                <input
                  id="privacy"
                  type="checkbox"
                  className="mt-1"
                />

                <span className="text-sm text-gray-700">
                  I have read and understood the conference privacy
                  statement and terms & conditions.
                </span>

              </label>

            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            {/* BUTTONS */}
            <div className="pt-8 flex justify-between">

              <Link
                to="/"
                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-md font-semibold"
              >
                Cancel
              </Link>

              <button
                type="button"
                onClick={handleNext}
                className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-md font-semibold"
              >
                Next
              </button>

            </div>

          </form>

        </div>
      </div>

      <Footer />
    </>
  );
}
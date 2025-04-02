import React from "react";
import { Link } from "react-router-dom";
function CreateParent() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md transform transition-all duration-500 overflow-hidden">
        <div className="px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
            Login
          </h2>
          <form>
            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm sm:text-md font-medium mb-2">
                Password *
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 sm:px-5 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 sm:py-4 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-md font-medium"
            >
              Login
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm sm:text-md">
              Don't have an account?{" "}
              <Link className="text-blue-700 hover:underline">
                Sign up
              </Link>
            </p>
            <p className="text-gray-600 text-sm sm:text-md mt-2">
              <Link  className="text-blue-700 hover:underline">
                Forgot password?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateParent;
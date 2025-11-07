"use client";
import React from "react";

const ErrorPage = ({
  message,
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Network Error
      </h2>
      <p className="text-gray-600 mb-5">
        {message ||
          "We couldn’t reach the server. Please check your internet connection."}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-5 py-2 bg-[#030142] text-white rounded-md hover:bg-blue-900 transition"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorPage;

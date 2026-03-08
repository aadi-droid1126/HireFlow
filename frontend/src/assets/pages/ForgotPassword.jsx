import { useState } from "react";
import api from "../api/axios.js";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // 🔐 Send OTP
  const handleSendOtp = async () => {
    try {
      setLoading(true);
      setError("");
      setMessage("");

      await api.post("/auth/forgot-password", { email });

      setMessage("OTP sent to your email");
      setStep(2);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // 🔁 Reset password
  const handleResetPassword = async () => {
    try {
      setLoading(true);
      setError("");
      setMessage("");

      await api.post("/auth/reset-password", {
        email,
        otp,
        newPassword,
      });

      setMessage("Password reset successful!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err?.response?.data?.message || "Reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 sm:p-8">

        {/* 🧠 Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">
            {step === 1 ? "Forgot Password" : "Reset Password"}
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            {step === 1
              ? "Enter your email to receive a reset OTP"
              : "Enter OTP and your new password"}
          </p>
        </div>

        {/* 🔔 Messages */}
        {message && (
          <div className="mb-4 text-sm text-green-600 bg-green-50 p-3 rounded-lg">
            {message}
          </div>
        )}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}

        {/* STEP 1: Email */}
        {step === 1 && (
          <>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 mb-4 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={handleSendOtp}
              disabled={loading}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}

        {/* STEP 2: OTP + New Password */}
        {step === 2 && (
          <>
            <label className="text-sm font-medium">OTP</label>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              className="w-full mt-2 mb-4 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <label className="text-sm font-medium">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full mt-2 mb-6 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <button
              onClick={handleResetPassword}
              disabled={loading}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </>
        )}

        {/* 🔙 Back to login */}
        <div className="text-center mt-6 text-sm">
          <button
            onClick={() => navigate("/login")}
            className="text-indigo-600 hover:underline"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from "firebase/auth";

declare global {
  interface Window {
    confirmationResult: ConfirmationResult;
    recaptchaVerifier: RecaptchaVerifier;
  }
}

export default function OTPPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);

  const sendOTP = async () => {
    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          { size: "normal" }
        );
      }

      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        window.recaptchaVerifier
      );

      window.confirmationResult = confirmation;
      setShowOTP(true);
      alert("OTP Sent!");
    } catch (err: any) {
      alert(err.message);
      console.error(err);
    }
  };

  const verifyOTP = async () => {
    try {
      await window.confirmationResult.confirm(otp);
      router.push("/home");
    } catch {
      alert("Wrong OTP");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-5 bg-gray-100">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
          Phone Login
        </h1>

        {!showOTP ? (
          <>
            <input
              type="tel"
              placeholder="+8801XXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-12 border rounded-xl px-4 mb-4"
            />

            <div id="recaptcha-container" className="mb-4"></div>

            <button
              onClick={sendOTP}
              className="w-full h-12 bg-green-700 text-white rounded-xl"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full h-12 border rounded-xl px-4 mb-4"
            />

            <button
              onClick={verifyOTP}
              className="w-full h-12 bg-green-700 text-white rounded-xl"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </main>
  );
}
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
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: ConfirmationResult;
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
          {
            size: "normal",
          }
        );
      }

      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        window.recaptchaVerifier
      );

      window.confirmationResult = confirmation;
      setShowOTP(true);
      alert("OTP Sent");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  const verifyOTP = async () => {
    try {
      await window.confirmationResult.confirm(otp);
      router.push("/home");
    } catch (error) {
      console.error(error);
      alert("Invalid OTP");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-8">

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
"use client";

import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      router.push("/home");
    } catch (error) {
      alert("Google Login Failed");
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-5">
      <div className="w-full max-w-sm rounded-[28px] shadow-xl p-8 bg-white border border-gray-100">

        <img
          src="/logo.jpeg"
          alt="Smart Bazar Logo"
          className="w-40 mx-auto mb-6"
        />

        <h1 className="text-3xl font-bold text-center text-green-700">
          Welcome to Smart Bazar
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-7">
          Shop fresh groceries easily, quickly and securely.
        </p>

        <button
          onClick={googleLogin}
          className="w-full h-14 rounded-2xl border border-gray-300 flex items-center justify-center gap-3 font-medium hover:bg-gray-50"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <button
          onClick={() => router.push("/otp")}
          className="w-full h-14 rounded-2xl bg-green-700 text-white font-semibold mt-4 hover:bg-green-800"
        >
          Continue with Phone Number
        </button>

      </div>
    </main>
  );
}
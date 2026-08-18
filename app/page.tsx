"use client";

import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();

  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/home");
    } catch (error) {
      console.error(error);
      alert("Google Login Failed");
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-5">
      <div className="w-full max-w-sm rounded-[28px] shadow-xl p-8 border">

        <img
          src="/logo.jpeg"
          alt="Logo"
          className="w-36 mx-auto mb-6"
        />

        <h1 className="text-3xl font-bold text-center text-green-700">
          Welcome to Smart Bazar
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-6">
          Shop fresh groceries easily, quickly and securely.
        </p>

        <button
          onClick={googleLogin}
          className="w-full h-14 border rounded-2xl flex items-center justify-center gap-3"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <button
          onClick={() => router.push("/otp")}
          className="w-full h-14 bg-green-700 text-white rounded-2xl mt-4"
        >
          Continue with Phone Number
        </button>

      </div>
    </main>
  );
}
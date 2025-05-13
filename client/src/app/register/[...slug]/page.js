"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useParams } from 'next/navigation';

export default function CustomAuth() {
  const [session, setSession] = useState(null);
  const params = useParams();
  console.log(params);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session)
    );
    return () => subscription.unsubscribe();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    setLoading(true);
    setError("");

    const { email, password, firstName, lastName, username, phone } = form;

    // 1. Sign up user
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // 2. Store extra user details in `profiles` table
    const userId = data.user?.id;
    if (userId) {
      const { error: dbError } = await supabase.from("profiles").insert([
        {
          id: userId,
          first_name: firstName,
          last_name: lastName,
          username,
          phone,
        },
      ]);

      if (dbError) {
        setError(dbError.message);
      }
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    if (error) setError(error.message);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (session) {
    return (
      <div className="p-6 max-w-md mx-auto text-center">
        <h2 className="text-lg font-semibold mb-2">✅ Logged in as:</h2>
        <p className="mb-4">{session.user.email}</p>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto p-6 border rounded-xl shadow-md space-y-3">
      <h2 className="text-xl font-bold text-center">Create your account</h2>

      <button
        onClick={handleGoogleLogin}
        className="w-full bg-white border py-2 rounded hover:bg-gray-100 flex items-center justify-center gap-2"
      >
        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" />
        Sign up with Google
      </button>

      <div className="text-center text-sm text-gray-500">or</div>

      <div className="grid grid-cols-2 gap-2">
        <input name="firstName" placeholder="First name" onChange={handleChange} className="p-2 border rounded" />
        <input name="lastName" placeholder="Last name" onChange={handleChange} className="p-2 border rounded" />
      </div>
      <input name="username" placeholder="Username" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="phone" placeholder="Phone number" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="email" placeholder="Email address" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded" />

      <button
        onClick={handleSignup}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {loading ? "Creating account..." : "Continue"}
      </button>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

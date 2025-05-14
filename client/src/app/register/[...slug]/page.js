"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useParams } from 'next/navigation';
import Register from "@/components/ui/register";

export default function CustomAuth() {
  const [session, setSession] = useState(null);
  const params = useParams();

  const [form, setForm] = useState({
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

  return (
    <Register loading={loading} error={error} session={session} handleChange={handleChange} handleGoogleLogin={handleGoogleLogin} handleSignup={handleSignup} handleLogout={handleLogout} />
  );
}

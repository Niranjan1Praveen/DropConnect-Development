"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";

export default function Register(props) {
  const {
    session,
    loading,
    error,
    handleChange,
    handleSignup,
    handleGoogleLogin,
    handleLogout,
  } = props;
  const router = useRouter();

  if (session) {
    router.push("/volunteer"); 
    return null;
  }

  return (
    <section className="px-4 h-screen w-screen flex items-center justify-center">
      <div className="max-w-2xl p-6 space-y-6">
        <div>
          <Image
            src={logo}
            alt="Logo Icon"
            className="h-9 w-auto md:h-auto mx-auto"
          />
        </div>
        <h2 className="text-4xl font-semibold">Create your account</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button onClick={handleGoogleLogin}>Google</Button>
          <Button>Github</Button>
        </div>
        <Input
          name="email"
          placeholder="Email address"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <Button
          type="button"
          onClick={handleSignup}
          disabled={loading}
          className="w-full"
        >
          {loading ? "Creating account..." : "Continue"}
        </Button>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </div>
    </section>
  );
}

'use client'
import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    const redirectUri = "http://localhost:8000/auth/google";
    window.location.href = redirectUri;
  }, []);

  return <p>Redirecting to Google...</p>;
}

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("jwt", token);
      router.replace('/'); // or '/dashboard' if you want to take them there directly
    } else {
      // No token = something went wrong
      router.replace('/login');
    }
  }, []);

  return <p className="p-4 text-center">Logging you in...</p>;
}

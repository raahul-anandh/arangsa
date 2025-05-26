'use client'

import React from "react";
import NavbarButton from "./NavbarButton";
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from "../contexts/authContext"

function Navbar() {
  const { user } = useAuth();
  const isLoggedIn = !!user;

  return (
    <nav className = "navbar flex h-16 items-center justify-between px-6 w-full">
      <Link href="/">
        <div className="relative w-24 h-20"> {/* Overflows its parent */}
          <Image src="/logo.svg" alt="Logo" fill className="object-contain"/>
        </div>
      </Link>
      <div className = "flex space-x-20">
        { isLoggedIn ? (
          <>
            <NavbarButton title="Dashboard" link="/dashboard" />
            <NavbarButton title="Account" link="/account" />
          </>
        ) : (
          <NavbarButton title="Login" link="/login" />
        ) }
      </div>
    </nav>
  );
}

export default Navbar;
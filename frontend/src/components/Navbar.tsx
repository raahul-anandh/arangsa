import React from "react";
import NavbarButton from "./NavbarButton";
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  const isLoggedIn = true;

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

<header id="js-main-header" class="main-header main-header--default" style="transform: translateY(0px);">
        <a href="https://nobl.io" title="NOBL" class="main-header__logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="33.908" viewBox="0 0 100 33.908">
            <path d="M57.876,0A10.967,10.967,0,0,0,46.893,10.919V22.988a10.983,10.983,0,0,0,21.965,0V10.919A10.967,10.967,0,0,0,57.876,0Zm4.929,22.892a4.881,4.881,0,0,1-9.762,0V11a4.881,4.881,0,0,1,9.762,0Z" transform="translate(-18.473)"></path>
            <path d="M22.286,4.061V30.594a3.131,3.131,0,0,1-6.262,0V18.8L6.262,10.7V30.594a3.131,3.131,0,0,1-6.262,0V4.061A3.14,3.14,0,0,1,3.147.948a3.088,3.088,0,0,1,2.216.926l10.661,8.844V4.061a3.131,3.131,0,0,1,6.262,0Z" transform="translate(0 -0.374)"></path>
            <path d="M109.474,16.662a8.72,8.72,0,0,0,3.628-7.1A8.566,8.566,0,0,0,104.608.922H96.387a3.14,3.14,0,0,0-3.131,3.129V30.583A3.149,3.149,0,0,0,96.484,33.7h8.124a9.33,9.33,0,0,0,4.849-17.034ZM99.519,7.132h4.014a3.257,3.257,0,1,1,0,6.513H99.519V7.132Zm3.885,20.4H99.551V24.085a3.258,3.258,0,0,1-.016-.4c0-.128,0-.271.016-.463V19.839H103.4a3.847,3.847,0,1,1,0,7.695Z" transform="translate(-36.737 -0.363)"></path>
            <path d="M153.969,30.636a3.109,3.109,0,0,1-3.115,3.1H140.128a3.109,3.109,0,0,1-3.115-3.1V23.995a3.019,3.019,0,0,1,.915-2.187l4.432-4.454L137.912,12.9A3.046,3.046,0,0,1,137,10.713V4.072a3.115,3.115,0,0,1,6.23,0V9.436l5.764,5.731a3.071,3.071,0,0,1,0,4.374l-5.764,5.731v2.219h7.611a3.129,3.129,0,0,1,3.115,3.145Z" transform="translate(-53.969 -0.384)"></path>
          </svg>
        </a>
        <nav class="main-header__top-nav">
          <ul><li id="menu-item-168" class="js-mega-menu-capabilities js-mega-menu-trigger menu-item menu-item-type-post_type menu-item-object-page menu-item-168"><a href="https://nobl.io/capabilities/">Capabilities</a></li>
<li id="menu-item-169" class="js-mega-menu-methodology js-mega-menu-trigger menu-item menu-item-type-post_type menu-item-object-page menu-item-169"><a href="https://nobl.io/methodology/">Methodology</a></li>
<li id="menu-item-170" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-170"><a href="https://nobl.io/about/">About NOBL</a></li>
</ul>        </nav>
        <div class="main-header__right">
          <a href="https://nobl.io/todays-changemaker/" title="Today's Changemaker" class="">Today's Changemaker</a>
          <button class="[ main-header__search ] [ js-nav-search ]" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="18.707" height="18.707" viewBox="0 0 18.707 18.707">
              <g transform="translate(-1802 -38)">
                <g transform="translate(1802 38)" fill="none" stroke="#000" stroke-width="2">
                  <circle cx="8" cy="8" r="8" stroke="none"></circle>
                  <circle cx="8" cy="8" r="7" fill="none"></circle>
                </g>
                <line x2="5" y2="5" transform="translate(1815 51)" fill="none" stroke="#000" stroke-width="2"></line>
              </g>
            </svg>
          </button>
          <button id="js-nav-burger" class="main-header__burger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
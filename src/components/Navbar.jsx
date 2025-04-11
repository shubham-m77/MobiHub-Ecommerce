'use client'; 

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/Navbar.module.css';
import Container from './homepage/Container';
import { FiSearch, FiShoppingCart, FiMenu, FiUser } from 'react-icons/fi';
import { jwtDecode } from 'jwt-decode';
import { useCart } from '@/context/cartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const [profileOpen, setProfileOpen] = useState(false); // Profile dropdown state
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navbarRef = useRef(null);
  const profileRef = useRef(null);

  // Function to toggle the mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Function to toggle the profile dropdown
  const toggleProfile = () => setProfileOpen(!profileOpen);

  // Close menu and profile dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* PC Navbar */}
      <header className={`${styles.navbar} shadow-sm d-none d-md-block`} ref={navbarRef}>
        <Container className="d-flex justify-content-between align-items-center text-center">
          {/* Brand Logo */}
          <div className={`${styles.logo} text-center`}>
            <span className={`${styles.brand_span_1st}`}>Mobi</span>
            <span className={`${styles.brand_span_2nd}`}>Hub</span>
          </div>

          {/* Upper Search Bar (PC only) */}
          <div className={`${styles.searchBar} d-flex align-items-center`}>
            <input
              type="text"
              placeholder="Search Your Products..."
              className={`${styles.searchInput}`}
            />
            <button className={`${styles.searchBtn}`}>
              <FiSearch size={18} />
            </button>
          </div>

          {/* Navbar Links */}
          <NavLinks profileOpen={profileOpen} setProfileOpen={setProfileOpen} />

          {/* Right - Cart Icon */}
          <Link href={"/cart"}>
          <div className={`${styles.cartIcon} d-flex align-items-center`}>
            <FiShoppingCart size={24} />
            <span className={`${styles.cartSpan}`}>{totalItems}</span>
          </div>
          </Link>
        </Container>
      </header>

      {/* Mobile Navbar */}
      <header className={`${styles.navbar} shadow-sm d-block d-md-none`} ref={navbarRef}>
        <Container className="d-flex justify-content-between align-items-center">
          {/* Hamburger Button for mobile */}
          <div
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''} d-md-none`}
            onClick={toggleMenu}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>

          {/* Left - Logo */}
          <div className={`${styles.logo}`}>
            <span className={`${styles.brand_span_1st}`}>Mobi</span>
            <span className={`${styles.brand_span_2nd}`}>Hub</span>
          </div>

          {/* Profile Icon */}
          <div
            className={`${styles.profileIcon} ${profileOpen ? styles.open : ''}`}
            onClick={toggleProfile}
            ref={profileRef}
          >
            <FiUser size={24} />
          </div>

          {/* Right - Cart Icon */}
          <Link href={"/cart"}>
          <div className={`${styles.cartIcon} d-flex align-items-center`}>
            <FiShoppingCart size={24} />
            <span className={`${styles.cartSpan}`}>{totalItems}</span>
          </div>
          </Link>
        </Container>

        {/* Profile Dropdown */}
        <div
          className={`${styles.profileDropdown} ${profileOpen ? styles.open : ''} d-md-none`}
        >
          <ProfileLinks />
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`${styles.dropdownMenu} ${menuOpen ? styles.open : ''} d-md-none`}>
          <NavLinks profileOpen={profileOpen} setProfileOpen={setProfileOpen} />
        </div>
      </header>

      {/* Full-width Search Bar at the bottom */}
      <div className={`d-flex align-items-center ${styles.searchBar_responsive}`}>
        <input
          type="text"
          placeholder="Search Your Products..."
          className={`${styles.searchInput}`}
        />
        <button className={`${styles.searchBtn}`}>
          <FiSearch size={18} />
        </button>
      </div>
    </>
  );
};

const NavLinks = ({ profileOpen, setProfileOpen }) => {
  // const [isClient, setIsClient] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  // useEffect(() => {
  //   setIsClient(true); // Set to true once the component is rendered on the client side
  // }, []);

  // if (!isClient) return null; // Avoid rendering this component on the server side

  const pathname = usePathname(); // Get current path
  const isActive = (path) => pathname === path; // Compare paths

  useEffect(() => {
    // Retrieve the token from localStorage when the component mounts
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      try {
        // Decode the JWT token to extract user details
        const decodedToken = jwtDecode(storedToken);

        // Assuming the JWT contains the name in the 'name' field
        setUserDetails(decodedToken);  // Save the decoded details in the state
      } catch (error) {
        console.error("Error decoding the token:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    // Remove the token from localStorage when the user logs out
    localStorage.removeItem('token');
    setUserDetails(null);  // Clear the user details from the component state
  };

  return (
    <nav className="d-flex align-items-center gap-5">
      <ul className="d-flex align-items-center gap-lg-5 m-0 flex-column flex-md-row">
        <li className={`${styles.navLink}`}>
          <Link href="/" className={`${isActive('/') ? styles.active : ''}`}>Home</Link>
        </li>
        <li className={`${styles.navLink} `}>
          <Link href="/store" className={`${isActive('/store') ? styles.active : ''}`}>Category/Store</Link>
        </li>
        <li className={`${styles.navLink} `}>
          {userDetails ? 
            <Link href=""
              // className={`${isActive('/logout') ? styles.active : ''}`}
              onClick={handleLogout}
            >
              @{userDetails.username}
            </Link>
          : 
            <Link href="/login" className={`${isActive('/login') ? styles.active : ''}`}>Account</Link>
          }
        </li>
      </ul>
    </nav>
  );
};

const ProfileLinks = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/orders">Orders</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
        <li>
          <Link href="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

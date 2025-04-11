'use client';

import { useState, useEffect } from 'react';
import styles from "@/styles/storePage.module.css";

// Category component - Custom dropdown for categories
const Category = ({ categories, isOpen }) => {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen); // Use SSR state initially

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown visibility
  };

  useEffect(() => {
    // Optional: Close the dropdown if the user clicks outside
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.customDropdown}`)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.categoryDropdownContainer}>
      <h3 className={styles.categoryTitle}>Categories</h3>
      <div className={`${styles.customDropdown} ${isDropdownOpen ? styles.open : ''} `}onClick={toggleDropdown}>
        {/* Custom Dropdown Header */}
        <div className={styles.dropdownHeader}>
          <span>Select a category</span>
          <span className={styles.arrow}>▼</span>
        </div>
        {/* Custom Dropdown List */}
        <div className={`${styles.dropdownListContainer}`}>
          <ul className={styles.dropdownList}>
            
            {categories?.map((category, index) => (
              <li key={index} className={styles.dropdownItem}>
                {category.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
